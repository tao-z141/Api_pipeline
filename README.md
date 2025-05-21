# API Pipeline 

Ce projet Node.js permet de générer des **profils utilisateurs complets** à partir de plusieurs APIs publiques. Il combine des données comme nom, email, numéro de téléphone, IBAN, carte bancaire, un random nom.

---

## Fonctionnalités

# via `randomuser.me`
- Génération d’un **profil utilisateur complet** (nom, email, photo, location, etc.)

# via `randommer.io`
- Numéro de téléphone 
- IBAN bancaire aléatoire
- Carte de crédit fictive
- Prénom aléatoire

# via `random-word-api`
- Mot aléatoire 

# via `api.thedogapi`
- Type de chien de compagnie

# via `official-joke-api`
- Une blague 

# via `zenquotes.io`
- Quote 

---
## Exemple de sortie

User: {
  name: 'Carlotta Reekers',
  email: 'carlotta.reekers@example.com',
  gender: 'female',
  location: 'Oostdijk, Netherlands',
  picture: 'https://randomuser.me/api/portraits/women/35.jpg'
}
---
Phone number: +33 7 81 12 56 88
---
IBAN: FR63047070012181C8354280835
---
Credit Card: {
  cardNumber: '3842596496995690',
  type: 'Discovery',
  Expiration: '2028-06-21T09:53:23.2045965+00:00',
  cvv: '641'
}
---
Random name: Amyra
---
Random word: stigmatics
---
Pet: Bernese Mountain Dog
---
Joke: {
  type: 'programming',
  content: 'What’s the object-oriented way to become wealthy? Inheritance.'
}
---
Quote: "Don't be afraid of missing opportunities. Behind every failure is an opportunity somebody wishes they had missed." — Lily Tomlin

# Dans le .env remplacer RANDOMMER_API_KEY avec votre API_KEY

# Pour voir le resultat executer la commande suivante : node pipeline.mjs