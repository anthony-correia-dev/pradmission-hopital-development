# Spécification : API Server Logic `getconfig`

## Contexte

Actuellement, les trigger IDs des Cloud Flows sont définis en dur dans les variables d'environnement Vite (`import.meta.env.VITE_*`). Cette approche pose plusieurs problèmes :

1. **Sécurité** : Les IDs sont exposés dans le bundle JavaScript client
2. **Déploiement** : Nécessite un rebuild pour changer les IDs
3. **Environnements** : Difficile de gérer plusieurs environnements (DEV, STAGING, PROD)

La solution est de récupérer ces valeurs dynamiquement depuis les **Site Settings** Power Pages via une Server Logic.

## Objectif

1. Créer une Server Logic `getconfig` qui lit les Site Settings
2. Appeler cette API au démarrage de l'application
3. Stocker les trigger IDs en mémoire pour les appels Cloud Flow ultérieurs
4. Supprimer la dépendance aux variables d'environnement Vite

## API Server Logic

### Endpoint

```
GET /_api/serverlogics/getconfig
```

### Headers requis

| Header | Valeur | Description |
|--------|--------|-------------|
| `__RequestVerificationToken` | Token CSRF | Via `/_layout/tokenhtml` |
| `Content-Type` | `application/json` | Format JSON |
| `x-requested-with` | `XMLHttpRequest` | Identifie la requête AJAX |

### Response

```json
{
  "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "success": true,
  "data": "{\"status\":\"success\",\"data\":{\"identityDoc\":\"abc123-trigger-id\",\"insuranceDoc\":\"def456-trigger-id\",\"submitflow\":\"ghi789-trigger-id\"}}",
  "serverLogicName": "getconfig"
}
```

### Structure des données parsées

```typescript
interface GetConfigResponse {
  status: 'success' | 'error'
  data?: {
    identityDoc: string    // Trigger ID pour OCR carte d'identité
    insuranceDoc: string   // Trigger ID pour OCR carte d'assurance
    submitflow: string     // Trigger ID pour soumission du formulaire
  }
  message?: string         // Message d'erreur si status = 'error'
}
```

### Site Settings Power Pages requis

| Site Setting | Description |
|--------------|-------------|
| `env_identitydoc` | Trigger ID du Cloud Flow OCR identité |
| `env_insurancedoc` | Trigger ID du Cloud Flow OCR assurance |
| `env_submit` | Trigger ID du Cloud Flow de soumission |

## Code Server Logic (déjà fourni)

```javascript
function get() {
    try {
        Server.Logger.Log("Récupération des variables d'environnement");

        const identityDocId = Server.SiteSetting.Get("env_identitydoc");
        const insuranceDocId = Server.SiteSetting.Get("env_insurancedoc");
        const submitflow = Server.SiteSetting.Get("env_submit");

        if (!identityDocId || !insuranceDocId) {
            Server.Logger.Error("Certains Site Settings sont introuvables ou vides.");
        }

        return JSON.stringify({
            status: "success",
            data: {
                identityDoc: identityDocId,
                insuranceDoc: insuranceDocId,
                submitflow: submitflow
            }
        });

    } catch (err) {
        Server.Logger.Error("Erreur lors de la récupération des paramètres : " + err.message);
        return JSON.stringify({ 
            status: "error", 
            message: "Impossible de charger la configuration serveur." 
        });
    }
}
```

## Implémentation Frontend

### 1. Types à ajouter dans `useApi.ts`

```typescript
// Réponse spécifique de getconfig
interface GetConfigResponse {
  status: 'success' | 'error'
  data?: CloudFlowConfig
  message?: string
}

// Configuration des Cloud Flows
export interface CloudFlowConfig {
  identityDoc: string    // OCR carte d'identité
  insuranceDoc: string   // OCR carte d'assurance  
  submitflow: string     // Soumission formulaire
}
```

### 2. Cache en mémoire pour la configuration

```typescript
// 🎯 Cache de la configuration Cloud Flow (chargée une seule fois)
let cloudFlowConfigCache: CloudFlowConfig | null = null
let configLoadingPromise: Promise<CloudFlowConfig | null> | null = null
```

### 3. Nouvelle fonction `getCloudFlowConfig` dans `useApi.ts`

```typescript
/**
 * 🎯 Récupère la configuration des Cloud Flows via la Server Logic getconfig
 * Utilise un cache en mémoire pour éviter les appels multiples
 * @returns Promise<CloudFlowConfig | null> - Configuration ou null si erreur
 */
const getCloudFlowConfig = async (): Promise<CloudFlowConfig | null> => {
  // Retourner le cache si disponible
  if (cloudFlowConfigCache) {
    return cloudFlowConfigCache
  }

  // Éviter les appels concurrents (singleton pattern)
  if (configLoadingPromise) {
    return configLoadingPromise
  }

  // Détecter si on est en local (DEV) ou sur Power Pages (PROD)
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1'

  // Mode développement - simulation avec valeurs des variables d'env
  if (isLocalhost) {
    configLoadingPromise = new Promise(resolve => {
      setTimeout(() => {
        const mockConfig: CloudFlowConfig = {
          identityDoc: import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID || 'mock-identity-trigger',
          insuranceDoc: import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID || 'mock-insurance-trigger',
          submitflow: import.meta.env.VITE_SUBMIT_TRIGGER_ID || 'mock-submit-trigger'
        }
        console.log('[DEV MODE] ⚙️ Configuration Cloud Flow mock:', mockConfig)
        cloudFlowConfigCache = mockConfig
        resolve(mockConfig)
      }, 100)
    })
    return configLoadingPromise
  }

  const apiUrl = '/_api/serverlogics/getconfig'

  configLoadingPromise = (async () => {
    try {
      const response = await safeAjax(apiUrl, 'GET') as ServerLogicResponse<string>

      if (!response.success) {
        console.error('❌ [getCloudFlowConfig] Réponse non réussie')
        return null
      }

      // Parser le champ data (JSON stringifié)
      const parsedData: GetConfigResponse = typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data as unknown as GetConfigResponse

      if (parsedData.status !== 'success' || !parsedData.data) {
        console.error('❌ [getCloudFlowConfig] Erreur:', parsedData.message)
        return null
      }

      // Stocker en cache
      cloudFlowConfigCache = parsedData.data
      console.log('✅ [getCloudFlowConfig] Configuration chargée:', cloudFlowConfigCache)

      return cloudFlowConfigCache

    } catch (error) {
      console.error('❌ [getCloudFlowConfig] Erreur:', error)
      return null
    } finally {
      // Reset le promise pour permettre un retry en cas d'erreur
      if (!cloudFlowConfigCache) {
        configLoadingPromise = null
      }
    }
  })()

  return configLoadingPromise
}
```

### 4. Modifier les fonctions utilisant les Cloud Flows

#### `extractDocumentData` - Utiliser la config dynamique

```typescript
const extractDocumentData = async (
  file: File,
  fileType: 'id_card' | 'insurance_card'
): Promise<OCRDocumentResponse | OCRInsuranceResponse | null> => {
  // ...existing localhost check...

  try {
    // Récupérer la configuration dynamique
    const config = await getCloudFlowConfig()
    if (!config) {
      console.error('❌ OCR: Configuration Cloud Flow non disponible')
      return null
    }

    const base64Data = await fileToBase64(file)
    const docType: 'identityid' | 'insuranceid' = fileType === 'id_card' ? 'identityid' : 'insuranceid'

    // Utiliser les trigger IDs de la config
    const triggerId = fileType === 'id_card' ? config.identityDoc : config.insuranceDoc
    const rawResponse = await safeAjaxCloudFlow(triggerId, { doc: docType, base64: base64Data })

    // ...rest of mapping logic...
  } catch (error) {
    console.error('❌ OCR: Erreur lors de l\'extraction:', error)
    return null
  }
}
```

### 5. Supprimer les constantes hardcodées

```typescript
// ❌ AVANT - Variables d'environnement (à supprimer)
const OCR_IDENTITY_TRIGGER_ID = import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID
const OCR_INSURANCE_TRIGGER_ID = import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID

// ✅ APRÈS - Plus besoin, les valeurs viennent de getconfig
```

### 6. Ajouter au return de `useApi()`

```typescript
return {
  // ...existing code...
  getCloudFlowConfig
}
```

## Diagramme de flux

```
┌─────────────────────┐
│   App Startup       │
│   (ou 1er OCR)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐     ┌────────────────┐
│  cloudFlowConfigCache    ───▶ return cache │
│  existe ?           │  ✓   └────────────────┘
└──────────┬──────────┘
           │ ✗
           ▼
┌─────────────────────┐
│  safeAjax GET       │
│  → getconfig        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Server Logic       │
│  Power Pages        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Site Settings                      │
│  - env_identitydoc                  │
│  - env_insurancedoc                 │
│  - env_submit                       │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────┐
│  Stocker en cache   │
│  + retourner config │
└─────────────────────┘
```

## Test en console F12

```javascript
fetch('/_layout/tokenhtml')
  .then(r => r.text())
  .then(h => {
    const t = new DOMParser().parseFromString(h, 'text/html').querySelector('input').value;

    return fetch('/_api/serverlogics/getconfig', {
      method: 'GET',
      headers: {
        '__RequestVerificationToken': t,
        'content-type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log("Résultat brut:", data);
    const parsed = JSON.parse(data.data);
    console.log("Configuration:", parsed);
    console.log("Identity Doc Trigger:", parsed.data.identityDoc);
    console.log("Insurance Doc Trigger:", parsed.data.insuranceDoc);
    console.log("Submit Flow Trigger:", parsed.data.submitflow);
  })
  .catch(err => console.error("Erreur:", err));
```

## Avantages de cette approche

| Aspect | Avant (env vars) | Après (getconfig) |
|--------|------------------|-------------------|
| **Sécurité** | IDs exposés dans le bundle JS | IDs côté serveur uniquement |
| **Déploiement** | Rebuild nécessaire | Changement Site Settings à chaud |
| **Multi-env** | Fichiers .env par environnement | 1 seul déploiement, config par env |
| **Maintenance** | Code + config couplés | Séparation claire |

## Checklist d'implémentation

- [ ] Créer la Server Logic `getconfig` dans Power Pages
- [ ] Configurer les Site Settings (`env_identitydoc`, `env_insurancedoc`, `env_submit`)
- [ ] Ajouter les types `GetConfigResponse` et `CloudFlowConfig` dans `useApi.ts`
- [ ] Ajouter le cache `cloudFlowConfigCache` et `configLoadingPromise`
- [ ] Implémenter la fonction `getCloudFlowConfig`
- [ ] Modifier `extractDocumentData` pour utiliser la config dynamique
- [ ] Modifier `sendOtp` et `verifyOTP` si nécessaire (ajouter triggers OTP aux Site Settings)
- [ ] Supprimer les constantes `OCR_IDENTITY_TRIGGER_ID`, `OCR_INSURANCE_TRIGGER_ID`, etc.
- [ ] Supprimer les variables `VITE_*` du fichier `.env` (optionnel, garder pour DEV)
- [ ] Tester en environnement Power Pages

## Notes importantes

1. **Singleton Pattern** : Le cache évite les appels multiples simultanés grâce à `configLoadingPromise`
2. **Fallback DEV** : En localhost, utilise les variables d'environnement Vite existantes
3. **Lazy Loading** : La config est chargée au premier besoin (pas au startup)
4. **Retry** : Si l'appel échoue, le promise est reset pour permettre un nouvel essai
5. **Extension future** : Ajouter `sendOtpTrigger` et `verifyOtpTrigger` aux Site Settings

## Extension recommandée

Pour une implémentation complète, ajouter aussi les triggers OTP :

### Site Settings supplémentaires

| Site Setting | Description |
|--------------|-------------|
| `env_sendotp` | Trigger ID du Cloud Flow envoi OTP |
| `env_verifyotp` | Trigger ID du Cloud Flow vérification OTP |

### Server Logic mise à jour

```javascript
function get() {
    try {
        const identityDocId = Server.SiteSetting.Get("env_identitydoc");
        const insuranceDocId = Server.SiteSetting.Get("env_insurancedoc");
        const submitflow = Server.SiteSetting.Get("env_submit");
        const sendOtp = Server.SiteSetting.Get("env_sendotp");
        const verifyOtp = Server.SiteSetting.Get("env_verifyotp");

        return JSON.stringify({
            status: "success",
            data: {
                identityDoc: identityDocId,
                insuranceDoc: insuranceDocId,
                submitflow: submitflow,
                sendOtp: sendOtp,
                verifyOtp: verifyOtp
            }
        });
    } catch (err) {
        Server.Logger.Error("Erreur: " + err.message);
        return JSON.stringify({ status: "error", message: "Erreur configuration" });
    }
}
```

## Historique

| Date | Modification |
|------|-------------|
| 2025-01-22 | Création de la spécification |