import UserModel from '../models/user.mjs';
import { generateToken, verifyToken } from '../models/jwt.mjs';
import validateUserInput from '../models/validate_user.mjs';

const Users = class Users {
  constructor(app, connect) {
    this.app = app;
    this.UserModel = connect.model('User', UserModel);

    this.run();
  }

  deleteById() {
    this.app.delete('/user/:id', (req, res) => {
      try {
        this.UserModel.findByIdAndDelete(req.params.id).then((user) => {
          res.status(200).json(user || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] users/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showById() {
    this.app.get('/user/:id', verifyToken, (req, res) => {
      try {
        this.UserModel.findById(req.params.id).then((user) => {
          res.status(200).json(user || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] users/:id -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  create() {
    this.app.post('/user/', (req, res) => {
      try {
        const validation = validateUserInput(req.body);

        if (!validation.valid) {
          return res.status(400).json({
            message: 'Validation échouée',
            errors: validation.errors
          });
        }

        const userModel = new this.UserModel(req.body);

        return userModel.save()
          .then((user) => res.status(200).json(user || {}))
          .catch((err) => {
            console.error('[ERROR] user/save ->', err);
            return res.status(500).json({ message: 'Erreur lors de l’enregistrement' });
          });
      } catch (err) {
        console.error(`[ERROR] users/create -> ${err}`);
        return res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  login() {
    this.app.post('/login', async (req, res) => {
      try {
        const { username } = req.body;

        if (!username) {
          return res.status(400).json({ message: 'Username requis' });
        }

        const user = await this.UserModel.findOne({ username });

        if (!user) {
          return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const token = generateToken({ id: user._id, username: user.username });

        return res.status(200).json({ token });
      } catch (err) {
        console.error(`[ERROR] users/login -> ${err}`);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
    });
  }

  run() {
    this.create();
    this.showById();
    this.deleteById();
    this.login();
  }
};

export default Users;
