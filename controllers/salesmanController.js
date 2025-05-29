import bcrypt from 'bcryptjs';
import Salesman from '../models/Salesman.js';

const saltRounds = 10;

export async function addSalesman(req, res) {
  try {
    if (req.user.role === 'admin') {
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
      const salesman = new Salesman(req.body);
      await salesman.save();
      res.status(201).json("Salesman Addedd Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}

export async function getAllSalesman(req, res) {
  try {
    if (req.user.role === 'admin') {
      const salesman = await Salesman.find();
      res.json(salesman);
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}

export async function getSalesmanInfo(body, res) {
  try {
    const user = await Salesman.findOne({ username: body.username });

    if (!user) {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }

    return user;
  } catch (err) {
    throw err;
  }
}

export async function deleteSalesman(req, res) {
  try {
    if (req.user.role === 'admin') {
      await Salesman.deleteOne({ _id: req.params.id });
      res.status(200).json("Salesman Deleted Successfully.");
    } else {
      const error = new Error('UNAUTHORIZED');
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    throw err;
  }
}