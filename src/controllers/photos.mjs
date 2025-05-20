import PhotoModel from '../models/photo.mjs';
import AlbumModel from '../models/album.mjs';
import validatePhotoInput from '../models/validate_photo.mjs';

const Photos = class Photos {
  constructor(app, connect) {
    this.app = app;
    this.Photo = connect.model('Photo', PhotoModel);
    this.Album = connect.model('Album', AlbumModel);

    this.run();
  }

  getAllFromAlbum() {
    this.app.get('/album/:albumId/photos', async (req, res) => {
      try {
        const photos = await this.Photo.find({ album: req.params.albumId });
        res.status(200).json(photos);
      } catch {
        res.status(500).json({ message: 'Erreur serveur' });
      }
    });
  }

  getOneFromAlbum() {
    this.app.get('/album/:albumId/photo/:photoId', async (req, res) => {
      try {
        const photo = await this.Photo.findOne({
          _id: req.params.photoId,
          album: req.params.albumId
        });
        res.status(200).json(photo || {});
      } catch {
        res.status(500).json({ message: 'Erreur serveur' });
      }
    });
  }

  createInAlbum() {
    this.app.post('/album/:albumId/photo', async (req, res) => {
      try {
        const validation = validatePhotoInput(req.body);
        if (!validation.valid) {
          return res.status(400).json({
            message: 'Validation échouée',
            errors: validation.errors
          });
        }

        const newPhoto = new this.Photo({
          ...req.body,
          album: req.params.albumId
        });

        const photo = await newPhoto.save();
        await this.Album.findByIdAndUpdate(req.params.albumId, {
          $push: { photos: photo._id }
        });

        return res.status(200).json(photo);
      } catch (err) {
        console.error('[ERROR] createInAlbum ->', err);
        return res.status(400).json({ message: 'Erreur de création' });
      }
    });
  }

  updateInAlbum() {
    this.app.put('/album/:albumId/photo/:photoId', async (req, res) => {
      try {
        const updated = await this.Photo.findOneAndUpdate(
          { _id: req.params.photoId, album: req.params.albumId },
          req.body,
          { new: true }
        );
        res.status(200).json(updated || {});
      } catch {
        res.status(400).json({ message: 'Erreur de mise à jour' });
      }
    });
  }

  deleteInAlbum() {
    this.app.delete('/album/:albumId/photo/:photoId', async (req, res) => {
      try {
        await this.Photo.deleteOne({ _id: req.params.photoId, album: req.params.albumId });
        await this.Album.findByIdAndUpdate(req.params.albumId, {
          $pull: { photos: req.params.photoId }
        });
        res.status(200).json({ deleted: true });
      } catch {
        res.status(500).json({ message: 'Erreur de suppression' });
      }
    });
  }

  run() {
    this.getAllFromAlbum();
    this.getOneFromAlbum();
    this.createInAlbum();
    this.updateInAlbum();
    this.deleteInAlbum();
  }
};

export default Photos;
