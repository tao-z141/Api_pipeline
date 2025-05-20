import jwt from 'jsonwebtoken';

const SECRET = 'e5d!@L9*Xzq$7bQ1#uM';

export const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' });

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou invalide' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(403).json({ message: 'Token invalide' });
  }
}
