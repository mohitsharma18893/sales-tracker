import bcrypt from 'bcryptjs';
import Salesman from '../models/Salesman.js';
import codes from '../constants/httpCodes.js';
import messages from '../constants/messages.js';
import checkRole from '../utils/checkRole.js';

const saltRounds = 10;

export async function addSalesman(req, res) {
  try {
    await checkRole('admin', req.user.role)
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    const salesman = new Salesman(req.body);
    await salesman.save();
    return res.status(codes.CREATED).json({ message: "Salesman Addedd Successfully." });
  } catch (err) {
    throw err;
  }
}

export async function getAllSalesman(req, res) {
  try {
    await checkRole('admin', req.user.role)
    const result = await Salesman.find();
    const salesman = result.map(user => ({
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      contact: user.contact
    }));
    return res.json(salesman);
  } catch (err) {
    throw err;
  }
}

export async function getSalesmanInfo(body, res) {
  try {
    const user = await Salesman.findOne({ username: body.username });

    if (!user) {
      const error = new Error(messages.INVALID_CREDENTIALS);
      error.statusCode = codes.UNAUTHORIZED;
      throw error;
    }
    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      const error = new Error(messages.INVALID_CREDENTIALS);
      error.statusCode = codes.UNAUTHORIZED;
      throw error;
    }
    return user;
  } catch (err) {
    throw err;
  }
}

export async function deleteSalesman(req, res) {
  try {
    await checkRole('admin', req.user.role)
    await Salesman.deleteOne({ _id: req.params.id });
    return res.status(codes.OK).json({ message: "Salesman Deleted Successfully." });
  } catch (err) {
    throw err;
  }
}