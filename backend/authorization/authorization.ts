import User from '../model/User';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config';

const generateAccessToken = (id: String) => {
  const payload = { id };
  return jwt.sign(payload, jwtSecret);
};

export class AuthController {
  static async registration(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Registration error', errors });
      }
      const { username, password } = req.body;
      const person = await User.findOne({ username });
      if (person) {
        res.status(400).json({ message: 'User with this name is already registered' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword });
      await user.save();
      res.status(400).json({ message: 'User registered successfully' });
    } catch (e) {
      res.status(400).json({ message: 'Registration error' });
    }
  }
  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.status(400).json({ message: `User ${username} doesn\'t found ` });
      }
      
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Invalid password' });
      }
      const token = generateAccessToken(user._id);
      return res.json({ token });
    } catch (e) {
      res.status(400).json({ message: 'Login error' });
    }
  }
}
