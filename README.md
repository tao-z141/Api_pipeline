# API Pipeline 

Ce projet Node.js permet de générer des **profils utilisateurs complets** à partir de plusieurs APIs publiques. Il combine des données comme nom, email, numéro de téléphone, IBAN, carte bancaire, un random nom.

---

## Fonctionnalités

- Génération d’un **profil utilisateur complet** (nom, email, photo, etc.)
- Numéro de téléphone (via `randommer.io`)
- IBAN bancaire aléatoire
- Carte de crédit fictive
- Prénom aléatoire

---
## Exemple de sortie
User: {
  name: 'Volkert Jung',
  email: 'volkert.jung@example.com',
  gender: 'male',
  location: 'Griendtsveen, Netherlands',
  picture: 'https://randomuser.me/api/portraits/men/72.jpg'
}
Phone number: +33 7 90 20 70 33
IBAN: FR1047003142208076012206097
Credit Card: {
  cardNumber: '378032063107061',
  type: 'AmericanExpress',
  Expiration: '2029-07-20T18:20:36.5650456+00:00',
  cvv: '898'
}
Random name: Rahim

## Dans le .env il y a le RANDOMMER_API_KEY

## Pour avoir le resultat executer la commande suivante : node pipeline.mjs