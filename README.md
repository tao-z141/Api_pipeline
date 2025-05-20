
# API Albums & Photos Securisé 

## Overview
Cette API permet de gérer des **albums** et des **photos** avec Express et MongoDB.  
Elle est destinée à stocker et consulter des images associées à des albums, par des requêtes HTTP.
Elle inclut également des pratiques de **sécurité**, **validation**, **limitation de requêtes**, et **HTTPS**.

---

## Quelques requêtes testé : 

### [POST] Create user   

* **HTTP request** : `http://localhost:3000/user`

#### Body :
```json
{
  "firstname": "Tao",
  "lastname": "Test",
  "username": "Ta",
  "password": "123456",
  "age": 25,
  "city": "Paris"
}

```

#### Response :
```json
{
    "firstname": "Tao",
    "lastname": "Test",
    "age": 25,
    "city": "Paris",
    "username": "Ta",
    "password": "123456",
    "id": "682c31a6adf7b09549735f01"
}
```

---

### [POST] Get login


* **HTTP request** : `POST→ http://localhost:3000/login`

#### Body :
```json
{
  "username": "Ta"
}
```

#### Response :
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmMzMWE2YWRmN2IwOTU0OTczNWYwMSIsInVzZXJuYW1lIjoiVGEiLCJpYXQiOjE3NDc3MjY3NzUsImV4cCI6MTc0NzczMDM3NX0.ae18QlH5uBTmjlRdLO16_WzE11ZwrtSfh2tWkFu7A3E"
}
```
### [GET] verify login with id 
Update un album.

* **HTTP request** : `GET → http://localhost:3000/user/682c31a6adf7b09549735f01`

#### Response :
```json
{
    "message": "Token manquant ou invalide"
}
```
---

### [GET] verify login with id  
verifier le login en ajoutant le token generer dans Authorization ( Bearer Token)

* **HTTP request** : `GET → http://localhost:3000/user/682c31a6adf7b09549735f01`

#### Response :
```json
{
    "firstname": "Tao",
    "lastname": "Test",
    "age": 25,
    "city": "Paris",
    "username": "Ta",
    "password": "123456",
    "id": "682c31a6adf7b09549735f01"
}
```
---

## Requirements
- Node.js v18
- npm 
- MongoDB Atlas (mettre l’URL de connexion dans `config.mjs`)
- Postman 

---

## Install
```bash
npm install
```

## Dev mode
```bash
npm run dev
```

## HTTPS
```bash
npm run dev-https
```

## Audit sécurité
```bash
npm audit fix
```

