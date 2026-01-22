# Spécification : Bouton "Resend OTP" avec compte à rebours

## 📋 Résumé

Modifier le comportement du bouton "Renvoyer le code" pour inclure un délai de 30 secondes entre chaque envoi, avec un compte à rebours visible.

---

## 🎯 Objectif

Empêcher le spam de requêtes OTP en imposant un délai obligatoire de 30 secondes :
- À l'ouverture de la page
- Après chaque clic sur le bouton "Resend"

---

## 📐 Comportement détaillé

### État initial (au montage du composant)
| Élément | Valeur |
|---------|--------|
| Bouton actif | ❌ Non |
| Texte affiché | `"Renvoyer le code dans 30s"` |
| Compte à rebours | Démarre à 30, décrémente chaque seconde |

### Pendant le compte à rebours
| Élément | Valeur |
|---------|--------|
| Bouton actif | ❌ Non (disabled) |
| Texte affiché | `"Renvoyer le code dans {N}s"` où N = secondes restantes |
| Style | Grisé / désactivé |

### Après expiration du compte à rebours (0 seconde)
| Élément | Valeur |
|---------|--------|
| Bouton actif | ✅ Oui |
| Texte affiché | `"Renvoyer le code"` (texte original) |
| Style | Normal / cliquable |

### Au clic sur le bouton (quand actif)
1. Appeler `sendOtp(preadmissionId)`
2. Réinitialiser le compte à rebours à 30 secondes
3. Désactiver le bouton immédiatement

---

## 🔤 Traductions ajoutées

```typescript
// locales/otp.ts
{
  fr: {
    resendIn: "Renvoyer le code dans {seconds}s",
  },
  en: {
    resendIn: "Resend code in {seconds}s",
  }
}
```

---

## 💻 Implémentation technique

### Fichiers modifiés
- `src/components/OTP.tsx` : Ajout du state et logique de countdown
- `src/locales/otp.ts` : Ajout de la traduction `resendIn`

### Nouveau state
```typescript
const [resendCountdown, setResendCountdown] = useState(30)
```

### Hook useEffect pour le timer
```typescript
useEffect(() => {
  if (resendCountdown > 0) {
    const timer = setTimeout(() => {
      setResendCountdown(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }
}, [resendCountdown])
```

### Modification de handleResendOtp
```typescript
const handleResendOtp = async () => {
  const preadmissionId = getValues('preadmissionId')
  if (preadmissionId) {
    await sendOtp(preadmissionId)
    setResendCountdown(30) // Reset le timer
  }
}
```

### Bouton modifié
```tsx
<Button
  type="button"
  variant="ghost"
  className="w-full text-brand-primary hover:text-brand-primary-hover hover:bg-brand-primary/5"
  onClick={handleResendOtp}
  disabled={loading || resendCountdown > 0}
>
  {resendCountdown > 0 
    ? t.resendIn.replace('{seconds}', String(resendCountdown))
    : t.resend
  }
</Button>
```

---

## ✅ Critères d'acceptation

- [x] Au chargement de la page, le bouton est désactivé avec compte à rebours "30s"
- [x] Le compte à rebours décrémente chaque seconde (30 → 29 → ... → 1 → 0)
- [x] À 0 seconde, le bouton devient cliquable avec le texte normal
- [x] Au clic, l'OTP est envoyé ET le compte à rebours redémarre à 30s
- [x] Le bouton reste désactivé si `loading` est true (pendant vérification)
- [x] Les traductions FR et EN sont disponibles

---

## 🧪 Tests à prévoir

1. **Test timer initial** : Vérifier que le timer démarre à 30 au montage
2. **Test décrémentation** : Vérifier que le timer passe de 30 à 0 en ~30 secondes
3. **Test activation** : Vérifier que le bouton devient cliquable à 0
4. **Test reset** : Vérifier que le timer revient à 30 après clic
5. **Test double disable** : Vérifier que `loading` désactive aussi le bouton

---

## 📅 Historique

| Date | Version | Auteur | Description |
|------|---------|--------|-------------|
| 2026-01-22 | 1.0 | - | Création initiale |
