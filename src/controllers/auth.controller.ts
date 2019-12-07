import { Request, Response } from "express";
import User, { IUser } from '../models/User';

import jwt from 'jsonwebtoken';

export async function signup(req: Request, res: Response): Promise<Response> {
  // recovering data
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  // encrypting password
  user.password = await user.encryptPassword(user.password);
  // saving data
  const savedUser = await user.save();
  // generating token
  const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');
  // returning token through the header and response to the server
  return res.header('auth-token', token).json({
    message: 'User successfully saved',
    savedUser
  });
}

export async function signin(req: Request, res: Response): Promise<Response> {
  // reading the email and looking for him
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json('Email or password are wrong');
  }
  // reading the password and checking it
  const correctPassword: boolean = await user.validatePassword(req.body.password);
  if (!correctPassword) {
    return res.status(400).json('Invalid password');
  }
  // generating token to expire in 24 hours
  const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
    expiresIn: 60 * 60 * 24
  });
  // returning token through the header and response to the server
  return res.header('auth-token', token).json({
    message: 'User successfully signin',
    user
  });
}

export async function profile(req: Request, res: Response): Promise<Response> {
  // looking for the user
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) {
    return res.status(404).json('No user found');
  }
  // response to the server
  return res.json({
    message: 'User found',
    user
  });
}
