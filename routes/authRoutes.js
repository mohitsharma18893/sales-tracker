import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { getSalesmanInfo } from '../controllers/salesmanController.js';

const router = Router();

router.post('/', async (req, res) => {

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

    res.json({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        contact: user.contact,
        role: user.role
      }
    });
  } catch (error) {
    res.status(error.statusCode || codes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

export default router;
