# API Pipeline 

Ce projet Node.js permet de générer des **profils utilisateurs complets** à partir de plusieurs APIs publiques. Il combine des données comme nom, email, numéro de téléphone, IBAN, carte bancaire, un random nom.

---

# Fonctionnalités

* via `randomuser.me`
- Génération d’un **profil utilisateur complet** (nom, email, photo, location, etc.)

* via `randommer.io`
- Numéro de téléphone 
- IBAN bancaire aléatoire
- Carte de crédit fictive
- Prénom aléatoire

* via `random-word-api`
- Mot aléatoire 

* via `api.thedogapi`
- Type de chien de compagnie

* via `official-joke-api`
- Une blague 

* via `zenquotes.io`
- Quote 

---
## Exemple de sortie

```json
{
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "gender": "male",
    "location": "Paris, France",
    "picture": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  "phone_number": "+33 6 12 34 56 78",
  "iban": "FR1420041010050500013M02606",
  "credit_card": {
    "card_number": "4111111111111111",
    "card_type": "VISA",
    "expiration_date": "12/2026",
    "cvv": "123"
  },
  "random_name": "Alice",
  "pet": "Golden Retriever",
  "quote": {
    "content": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  "joke": {
    "type": "Programming",
    "content": "Why do programmers prefer dark mode? Because light attracts bugs."
  }
}
```

```bash
Dans le .env remplacer RANDOMMER_API_KEY avec votre API_KEY
```

```bash
Pour lancer le projet executer la commande suivante : node pipeline.mjs
```