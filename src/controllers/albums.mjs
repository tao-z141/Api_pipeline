import AlbumModel from '../models/album.mjs';
import PhotoModel from '../models/photo.mjs';

const Albums = class Albums {
  constructor(app, connect) {
    this.app = app;
    this.Album = connect.model('Album', AlbumModel);
    this.Photo = connect.model('Photo', PhotoModel);

    this.run();
  }

  getAll() {
    this.app.get('/albums', async (req, res) => {
      try {
        const filter = req.query.title ? { title: new RegExp(req.query.title, 'i') } : {};
        const albums = await this.Album.find(filter).populate('photos');
        res.status(200).json(albums);
      } catch {
        res.status(500).json({ message: 'Erreur serveur' });
      }
    });
  }

  getById() {
    this.app.get('/album/:id', async (req, res) => {
      try {
        const album = await this.Album.findById(req.params.id).populate('photos');
        res.status(200).json(album || {});
      } catch {
        res.status(500).json({ message: 'Erreur serveur' });
      }
    });
  }

  create() {
    this.app.post('/album', async (req, res) => {
      try {
        const newAlbum = new this.Album(req.body);
        const album = await newAlbum.save();
        res.status(200).json(album);
      } catch {
        res.status(400).json({ message: 'Erreur de création' });
      }
    });
  }

  update() {
    this.app.put('/album/:id', async (req, res) => {
      try {
        const updated = await this.Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated || {});
      } catch {
        res.status(400).json({ message: 'Erreur de mise à jour' });
      }
    });
  }

  delete() {
    this.app.delete('/album/:id', async (req, res) => {
      try {
        await this.Photo.deleteMany({ album: req.params.id });
        const deleted = await this.Album.findByIdAndDelete(req.params.id);
        res.status(200).json(deleted || {});
      } catch {
        res.status(500).json({ message: 'Erreur de suppression' });
      }
    });
  }

  run() {
    this.getAll();
    this.getById();
    this.create();
    this.update();
    this.delete();
  }
};

export default Albums;
