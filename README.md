
# API Albums & Photos

## Overview
Cette API permet de gérer des **albums** et des **photos** avec Express et MongoDB.  
Elle est destinée à stocker et consulter des images associées à des albums, par des requêtes HTTP.

---

## Quelques requêtes testé : 

### [POST] Create album  
Crée un nouvel album.
* **HTTP request** : `POST → /album`

#### Body :
```json
{
  "title": "Vacances",
  "description": "Photos de mes vacances"
}
```

#### Response :
```json
{
    "title": "Vacances",
    "description": "Photos de mes vacances",
    "photos": [],
    "created_at": "2025-05-19T09:30:25.268Z",
    "id": "682afa2f1202c1a5d159646b"
}
```

---

### [GET] Get album with id  
Trouver un album avec son id.

* **HTTP request** : `GET → /album/id_album`

#### Response :
```json
{
    "title": "Vacances",
    "description": "Photos de mes vacances",
    "photos": [],
    "created_at": "2025-05-19T09:30:25.268Z",
    "id": "682afa2f1202c1a5d159646b"
}
```
### [PUT] Update an album
Update un album.

* **HTTP request** : `PUT → /album/id_album`
#### Body :
```json
{
  "title": "Vacances - mises à jour",
  "description": "Album avec nouvelles photos"
}
```

#### Response :
```json
{
    "title": "Vacances - mises à jour",
    "description": "Album avec nouvelles photos",
    "photos": [],
    "created_at": "2025-05-19T09:30:25.268Z",
    "id": "682afa2f1202c1a5d159646b"
}
```
---

### [POST] Add photo to album  
Ajoute une photo à un album existant.

* **HTTP request** : `POST → /album/:albumId/photo`

#### Body :
```json
{
  "title": "plage",
  "url": "https://media.routard.com/image/21/7/photo.1439217.jpg",
  "description": "Photo plage",
  "album": "i682afa2f1202c1a5d159646b"
}
```

#### Response :
```json
{
    "title": "plage",
    "url": "https://media.routard.com/image/21/7/photo.1439217.jpg",
    "description": "Photo plage",
    "album": "682afa2f1202c1a5d159646b",
    "created_at": "2025-05-19T09:41:37.911Z",
    "id": "682afcd11202c1a5d159646f"
}
```

---

### [GET] Get all photos in album  
Retourne toutes les photos d’un album donné.

* **HTTP request** : `GET → /album/:albumId/photos`

#### Response :
```json
[
    {
        "title": "plage",
        "url": "https://media.routard.com/image/21/7/photo.1439217.jpg",
        "description": "Photo plage",
        "album": "682afa2f1202c1a5d159646b",
        "created_at": "2025-05-19T09:41:37.911Z",
        "id": "682afcd11202c1a5d159646f"
    }
]
```
### [PUT] Update a photo
Update une photo.

* **HTTP request** : `PUT → /album/id_album/photo/id_photo`
#### Body :
```json
{
  "title": "photo plage update",
  "url": "https://media.routard.com/image/21/7/photo.1439217.jpg",
  "description": "Photo plage update",
  "album": "682afa2f1202c1a5d159646b"
}
```

#### Response :
```json
{
    "title": "photo plage update",
    "url": "https://media.routard.com/image/21/7/photo.1439217.jpg",
    "description": "Photo plage update",
    "album": "682afa2f1202c1a5d159646b",
    "created_at": "2025-05-19T09:41:37.911Z",
    "id": "682afcd11202c1a5d159646f"
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

