# Spécification : Récupération des Cloud Flow Trigger IDs via Server Logic

## Contexte

Actuellement, le hook `useApi.ts` utilise `shell.ajaxSafePost` pour les appels Cloud Flow OCR avec des trigger IDs en dur via les variables d'environnement. Pour récupérer dynamiquement ces trigger IDs depuis Power Platform, nous devons ajouter un appel à la Server Logic `get_pread`.

## Objectif

Adapter la logique d'appel API pour :
1. Récupérer dynamiquement les trigger IDs des Cloud Flows via `shell.ajaxSafePost` (Server Logic)
2. Utiliser ces IDs pour les appels OCR existants

## Format de réponse Server Logic

### Requête (utilisant shell.ajaxSafePost comme dans useApi.ts)
```javascript
shell.ajaxSafePost({
  type: "GET",
  url: "/_api/serverlogics/get_pread",
  contentType: "application/json"
})
.done(function (res) {
  console.log(res);
})
.fail(function (error) {
  console.error(error);
});
```

### Réponse brute
```json
{
  "requestId": "d828cb6a-7f81-47a5-91ac-c46b1b4875df",
  "success": true,
  "data": "{\"status\":\"success\",\"data\":{\"identityDoc\":\"f729da03-646c-f011-b4cc-0022487492a4\",\"insuranceDoc\":\"43676cb8-6d6c-f011-b4cc-002248dae394\"}}",
  "serverLogicName": "get_pread"
}
```

### Données parsées
```typescript
interface ServerLogicResponse {
  requestId: string
  success: boolean
  data: string // JSON stringifié
  serverLogicName: string
}

interface PreadData {
  status: 'success' | 'error'
  data: {
    identityDoc: string   // Trigger ID pour OCR carte d'identité
    insuranceDoc: string  // Trigger ID pour OCR carte d'assurance
  }
}
```

## Comparaison des appels shell.ajaxSafePost

| Aspect | Appel Cloud Flow (actuel) | Appel Server Logic (nouveau) |
|--------|---------------------------|------------------------------|
| Méthode HTTP | POST | GET |
| URL | `/_api/cloudflow/v1.0/trigger/{triggerId}` | `/_api/serverlogics/get_pread` |
| Payload | `{ eventData: JSON.stringify({...}) }` | Aucun (GET) |
| Réponse | Données OCR directes | Enveloppée avec `requestId`, `success`, `data` |

## Changements proposés dans `useApi.ts`

### 1. Nouvelles interfaces

```typescript
// Réponse de la Server Logic get_pread
interface ServerLogicResponse {
  requestId: string
  success: boolean
  data: string  // JSON stringifié
  serverLogicName: string
}

interface PreadConfigData {
  status: 'success' | 'error'
  data: {
    identityDoc: string   // Cloud Flow trigger ID pour OCR identité
    insuranceDoc: string  // Cloud Flow trigger ID pour OCR assurance
  }
}

// Configuration OCR récupérée dynamiquement
interface OCRConfig {
  identityTriggerId: string
  insuranceTriggerId: string
}
```

### 2. Nouvelle fonction `fetchOCRConfig`

```typescript
// Cache pour la configuration OCR (évite les appels répétés)
let cachedOCRConfig: OCRConfig | null = null

/**
 * Récupère les trigger IDs des Cloud Flows OCR via Server Logic
 * Utilise shell.ajaxSafePost comme les autres appels de useApi.ts
 */
const fetchOCRConfig = async (): Promise<OCRConfig | null> => {
  // Retourner le cache si disponible
  if (cachedOCRConfig) {
    console.log('📄 OCR Config: Utilisation du cache', cachedOCRConfig)
    return cachedOCRConfig
  }

  // Vérifier si shell.ajaxSafePost est disponible (environnement Power Pages)
  if (typeof (window as any).shell === 'undefined' || !(window as any).shell.ajaxSafePost) {
    console.log('[DEV MODE] Server Logic non disponible, utilisation des variables d\'environnement')
    return {
      identityTriggerId: import.meta.env.VITE_OCR_IDENTITY_TRIGGER_ID || 'dev-identity-trigger',
      insuranceTriggerId: import.meta.env.VITE_OCR_INSURANCE_TRIGGER_ID || 'dev-insurance-trigger'
    }
  }

  return new Promise((resolve, reject) => {
    (window as any).shell.ajaxSafePost({
      type: "GET",
      url: "/_api/serverlogics/get_pread",
      contentType: "application/json"
    })
    .done(function (res: ServerLogicResponse) {
      console.log('✅ Server Logic get_pread réponse brute:', res)
      
      try {
        if (!res.success) {
          console.error('❌ Server Logic a retourné success: false')
          resolve(null)
          return
        }
        
        // Parser le champ data (JSON stringifié)
        const parsedData: PreadConfigData = JSON.parse(res.data)
        
        if (parsedData.status !== 'success') {
          console.error('❌ Statut interne erreur:', parsedData)
          resolve(null)
          return
        }
        
        const config: OCRConfig = {
          identityTriggerId: parsedData.data.identityDoc,
          insuranceTriggerId: parsedData.data.insuranceDoc
        }
        
        // Mettre en cache
        cachedOCRConfig = config
        
        console.log('✅ Configuration OCR récupérée et mise en cache:', config)
        resolve(config)
        
      } catch (parseError) {
        console.error('❌ Erreur parsing réponse Server Logic:', parseError)
        reject(parseError)
      }
    })
    .fail(function (error: any) {
      console.error('❌ Erreur appel Server Logic get_pread:', error)
      reject(error)
    })
  })
}

/**
 * Invalide le cache de configuration OCR
 */
const clearOCRConfigCache = (): void => {
  cachedOCRConfig = null
  console.log('🗑️ Cache OCR Config invalidé')
}
```

### 3. Modification de `extractDocumentData`

```typescript
const extractDocumentData = async (
  file: File,
  fileType: 'id_card' | 'insurance_card'
): Promise<OCRDocumentResponse | OCRInsuranceResponse | null> => {
  try {
    console.log(`📄 OCR: Extraction des données du document ${fileType}...`)
    
    // Convertir le fichier en Base64
    const base64Data = await fileToBase64(file)
    
    // Mapper le fileType vers le format attendu par le Cloud Flow
    const docType: 'identityid' | 'insuranceid' = fileType === 'id_card' ? 'identityid' : 'insuranceid'

    // Vérifier si shell.ajaxSafePost est disponible (environnement Power Pages)
    if (typeof (window as any).shell !== 'undefined' && (window as any).shell.ajaxSafePost) {
      
      // 🎯 NOUVEAU: Récupérer les trigger IDs dynamiquement
      const ocrConfig = await fetchOCRConfig()
      
      if (!ocrConfig) {
        console.error('❌ Impossible de récupérer la configuration OCR')
        return null
      }
      
      // Sélectionner le bon trigger ID
      const triggerId = fileType === 'id_card' 
        ? ocrConfig.identityTriggerId 
        : ocrConfig.insuranceTriggerId
      
      return new Promise((resolve, reject) => {
        (window as any).shell.ajaxSafePost({
          type: "POST",
          url: `/_api/cloudflow/v1.0/trigger/${triggerId}`,  // 🎯 Utilise le trigger ID dynamique
          data: {
            "eventData": JSON.stringify({
              "doc": docType,
              "base64": base64Data
            })
          }
        })
        .done(function (response: any) {
          // ... reste du code existant de parsing ...
        })
        .fail(function (error: any) {
          console.error('❌ Erreur Cloud flow OCR:', error)
          reject(error)
        })
      })
    } else {
      // Mode développement - simulation OCR
      // ... code existant ...
    }
  } catch (error) {
    console.error('❌ OCR: Erreur lors de l\'extraction:', error)
    return null
  }
}
```

## Structure finale du hook

```typescript
export const useApi = () => {
  return {
    // Existant
    postData,
    verifyBirthDate,
    verifyOTP,
    submitForm,
    extractDocumentData,
    
    // Nouveau
    fetchOCRConfig,      // Récupérer les trigger IDs (optionnel, appelé auto par extractDocumentData)
    clearOCRConfigCache  // Invalider le cache si nécessaire
  }
}
```

## Plan d'implémentation

### Phase 1 : Ajout des nouvelles fonctions
1. [ ] Ajouter les interfaces `ServerLogicResponse`, `PreadConfigData`, `OCRConfig`
2. [ ] Ajouter la variable `cachedOCRConfig`
3. [ ] Implémenter `fetchOCRConfig()` avec `shell.ajaxSafePost`
4. [ ] Implémenter `clearOCRConfigCache()`

### Phase 2 : Migration de `extractDocumentData`
1. [ ] Ajouter l'appel à `fetchOCRConfig()` au début
2. [ ] Remplacer `OCR_IDENTITY_TRIGGER_ID` / `OCR_INSURANCE_TRIGGER_ID` par les valeurs dynamiques
3. [ ] Garder les constantes comme fallback en mode dev

### Phase 3 : Nettoyage (optionnel)
1. [ ] Les variables d'environnement `VITE_OCR_*` restent comme fallback dev uniquement

## Tests

### En environnement Power Pages
```javascript
// Console test - récupération config
shell.ajaxSafePost({
  type: "GET",
  url: "/_api/serverlogics/get_pread",
  contentType: "application/json"
})
.done(function (res) {
  console.log('Réponse brute:', res)
  console.log('Data parsée:', JSON.parse(res.data))
})
.fail(function (err) {
  console.error('Erreur:', err)
})
```

### En mode développement local
- Les fonctions doivent retourner des valeurs mock via variables d'environnement
- Le cache doit fonctionner correctement

## Notes importantes

1. **Double parsing JSON** : La réponse Server Logic contient `data` en JSON stringifié, il faut donc parser deux fois
2. **Cache** : La configuration est mise en cache après le premier appel pour éviter les appels répétés
3. **Même pattern** : Utilise `shell.ajaxSafePost` avec `.done()` / `.fail()` comme le code OCR existant
4. **Compatibilité** : Garder le support des variables d'environnement pour le développement local
5. **Méthode GET** : La Server Logic utilise GET (pas de body), contrairement aux Cloud Flows qui utilisent POST
