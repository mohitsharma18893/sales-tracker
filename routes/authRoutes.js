import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { getSalesmanInfo } from '../controllers/salesmanController.js';
import codes from '../constants/httpCodes.js';
import messages from '../constants/messages.js';
import { validateBodyWithJoi } from '../middleware/validateWithJoi.js';
import { loginSchema } from '../validators/schema.js';

const router = Router();

router.post('/', validateBodyWithJoi(loginSchema), async (req, res) => {

  try {
    const user = await getSalesmanInfo(req.body, res);

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_SECRET_EXPIRE_TIME }
    );

    return res.status(codes.OK).json({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        contact: user.contact,
        role: user.role
      }
    });
  } catch (error) {
    return res.status(error.statusCode || codes.INTERNAL_SERVER_ERROR).json({ message: error.message || messages.SERVER_ERROR});
  }
});

export default router;
