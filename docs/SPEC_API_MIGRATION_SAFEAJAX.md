# Spécification : Appels API sécurisés avec safeAjax

## Contexte

Dans Power Pages, `shell.ajaxSafePost` n'est **pas toujours disponible** dans les applications SPA personnalisées (React). Cette fonction était censée gérer automatiquement le token anti-CSRF, mais elle n'existe pas dans `window.shell` sur nos pages.

### Problème identifié

```javascript
// Ce qu'on voit dans window.shell :
window.shell = {
  getTokenDeferred: async ƒ fetchAntiForgeryToken()  // ✅ Disponible
  // ajaxSafePost n'existe PAS ❌
}
```

## Solution implémentée : `safeAjax`

Émulation de `shell.ajaxSafePost` avec `fetch` natif + récupération manuelle du token anti-CSRF.

### Principe

1. Récupérer le token anti-CSRF depuis `/_layout/tokenhtml`
2. Parser le HTML pour extraire le token
3. Effectuer la requête `fetch` avec le token dans les headers

### Référence

Basé sur l'article : [Power Pages SPA - Emulate ajaxSafePost with fetch](https://dev.to/andrewelans/power-pages-spa-emulate-ajaxsafepost-with-fetch-2ka)

## Implémentation dans `useApi.ts`

### 1. Fonction `fetchAntiCsrfToken`

```typescript
/**
 * 🔐 Récupère le token anti-CSRF depuis Power Pages
 * Utilise /_layout/tokenhtml pour extraire le token
 */
const fetchAntiCsrfToken = async (): Promise<string | null> => {
  try {
    console.log('🔐 [safeAjax] Récupération du token anti-CSRF...')
    const response = await fetch('/_layout/tokenhtml')
    const html = await response.text()
    
    const doc = new DOMParser().parseFromString(html, "text/html")
    const input = doc.querySelector("input")
    const token = input ? input.getAttribute("value") : null
    
    if (token) {
      console.log('🔐 [safeAjax] Token récupéré:', token.substring(0, 20) + '...')
    } else {
      console.warn('🔐 [safeAjax] Token non trouvé dans le HTML')
    }
    
    return token
  } catch (error) {
    console.error('🔐 [safeAjax] Erreur récupération token:', error)
    return null
  }
}
```

### 2. Fonction `safeAjax`

```typescript
/**
 * 🔐 Émule shell.ajaxSafePost avec fetch natif
 * Récupère le token anti-CSRF puis effectue la requête
 */
const safeAjax = async (
  url: string,
  method: 'GET' | 'POST' = 'GET',
  data?: unknown
): Promise<unknown> => {
  // Récupérer le token anti-CSRF
  const token = await fetchAntiCsrfToken()
  
  if (!token) {
    throw new Error('Impossible de récupérer le token anti-CSRF')
  }
  
  // Construire les options de la requête
  const options: RequestInit = {
    method,
    headers: {
      '__RequestVerificationToken': token,
      'content-type': method === 'POST' 
        ? 'application/x-www-form-urlencoded; charset=UTF-8' 
        : 'application/json',
      'x-requested-with': 'XMLHttpRequest'
    }
  }
  
  // Ajouter le body pour les requêtes POST
  if (method === 'POST' && data) {
    options.body = new URLSearchParams({
      eventData: JSON.stringify(data)
    }).toString()
  }
  
  console.log('🔐 [safeAjax] Appel fetch:', method, url)
  
  const response = await fetch(url, options)
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  
  const text = await response.text()
  
  // Essayer de parser en JSON
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}
```

### 3. Utilisation dans `validatePreadmissionLink`

```typescript
const validatePreadmissionLink = async (preadmissionId: string): Promise<boolean> => {
  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'
  
  // Mode développement - simulation
  if (isLocalhost) {
    console.log('🔗 [DEV MODE] Validation simulée')
    await new Promise(resolve => setTimeout(resolve, 800))
    return !!preadmissionId && preadmissionId !== 'invalid'
  }

  // Power Pages - utiliser safeAjax
  const apiUrl = `/_api/serverlogics/getpread?preadmissionId=${encodeURIComponent(preadmissionId)}`
  
  try {
    const response = await safeAjax(apiUrl, 'GET') as any
    
    // Parser la réponse Server Logic
    let parsedResponse = response
    if (typeof response === 'string') {
      parsedResponse = JSON.parse(response)
    }
    
    if (!parsedResponse.success) {
      return false
    }
    
    // Parser le champ data (JSON stringifié)
    let parsedData: GetPreadResponse
    if (typeof parsedResponse.data === 'string') {
      parsedData = JSON.parse(parsedResponse.data)
    } else {
      parsedData = parsedResponse.data
    }
    
    return parsedData.isValid === true
    
  } catch (error) {
    console.error('🔗 [validatePreadmissionLink] ❌ Erreur:', error)
    return false
  }
}
```

## Comparaison des approches

| Aspect | `shell.ajaxSafePost` (ancien) | `safeAjax` (nouveau) |
|--------|-------------------------------|----------------------|
| **Disponibilité** | ❌ Non disponible dans SPA | ✅ Toujours disponible |
| **Token CSRF** | Géré automatiquement | Récupéré via `/_layout/tokenhtml` |
| **Dépendance** | jQuery | `fetch` natif |
| **Format réponse** | jQuery Promise (`.done()/.fail()`) | Promise native |
| **Compatibilité** | Power Pages natif uniquement | SPA React + Power Pages |

## Headers requis

| Header | Valeur | Description |
|--------|--------|-------------|
| `__RequestVerificationToken` | Token CSRF | Obligatoire pour les appels sécurisés |
| `content-type` | `application/json` (GET) ou `application/x-www-form-urlencoded` (POST) | Type de contenu |
| `x-requested-with` | `XMLHttpRequest` | Identifie la requête comme AJAX |

## Tests en console F12

### Test complet avec safeAjax

```javascript
(async () => {
  try {
    console.log('🚀 Début du test...')
    
    // Étape 1: Récupérer le token
    const tokenResponse = await fetch('/_layout/tokenhtml')
    const tokenHtml = await tokenResponse.text()
    const doc = new DOMParser().parseFromString(tokenHtml, "text/html")
    const token = doc.querySelector("input")?.getAttribute("value")
    console.log('🔐 Token:', token?.substring(0, 30) + '...')
    
    // Étape 2: Appeler la Server Logic
    const preadmissionId = '1f1fccfd-19af-f011-bbd3-002248dacckl'
    const response = await fetch(
      `/_api/serverlogics/getpread?preadmissionId=${preadmissionId}`,
      {
        method: 'GET',
        headers: {
          "__RequestVerificationToken": token,
          "content-type": "application/json",
          "x-requested-with": "XMLHttpRequest"
        }
      }
    )
    
    const data = await response.json()
    console.log('✅ Réponse:', data)
    
  } catch (error) {
    console.error('❌ Erreur:', error)
  }
})()
```

### Test Cloud Flow (POST)

```javascript
(async () => {
  // Récupérer le token
  const tokenResponse = await fetch('/_layout/tokenhtml')
  const tokenHtml = await tokenResponse.text()
  const doc = new DOMParser().parseFromString(tokenHtml, "text/html")
  const token = doc.querySelector("input")?.getAttribute("value")
  
  // Appeler le Cloud Flow
  const triggerId = '88b95a74-8570-f011-b4cc-000d3ad91bc3'
  const response = await fetch(
    `/_api/cloudflow/v1.0/trigger/${triggerId}`,
    {
      method: 'POST',
      body: new URLSearchParams({ 
        eventData: JSON.stringify({ doc: 'identityid', base64: '...' }) 
      }),
      headers: {
        "__RequestVerificationToken": token,
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest"
      }
    }
  )
  
  console.log('Réponse:', await response.text())
})()
```

## Notes importantes

1. **`shell.ajaxSafePost` est déprécié** - Ne pas l'utiliser dans les SPA React
2. **Token via `/_layout/tokenhtml`** - Seule méthode fiable pour récupérer le token CSRF
3. **`getTokenDeferred` existe mais insuffisant** - Il faut utiliser `/_layout/tokenhtml`
4. **Double parsing JSON** - La réponse Server Logic contient `data` en JSON stringifié
5. **Détection DEV/PROD** - Basée sur `window.location.hostname` (localhost vs Power Pages)

## Structure finale du hook `useApi.ts`

```typescript
export const useApi = () => {
  return {
    postData,
    verifyBirthDate,
    verifyOTP,
    submitForm,
    extractDocumentData,
    validatePreadmissionLink  // ✅ Utilise safeAjax
  }
}
```

## Historique des modifications

| Date | Modification |
|------|-------------|
| 2025-01-18 | Implémentation initiale avec `shell.ajaxSafePost` |
| 2025-01-18 | Migration vers `safeAjax` (fetch + token CSRF) suite à l'indisponibilité de `shell.ajaxSafePost` |
