// middlewares/auth.js
import jwt from 'jsonwebtoken';
import codes from '../constants/httpCodes.js';
import messages from '../constants/messages.js';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(codes.UNAUTHORIZED).json({ message: messages.TOKEN_MISSING });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload (like id, role, etc.) to request
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(codes.UNAUTHORIZED).json({ message: messages.TOKEN_EXPIRED });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(codes.UNAUTHORIZED).json({ message: messages.TOKEN_INVALID });
    } else {
      return res.status(codes.INTERNAL_SERVER_ERROR).json({ message: messages.SERVER_ERROR });
    }
  }
};
