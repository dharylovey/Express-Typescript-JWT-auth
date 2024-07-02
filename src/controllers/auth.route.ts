import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/users.model';
import { UserProps } from '../types/users.types';
import generateToken from '../utils/generateToken';

export const registerUser = async (req: Request<{}, {}, UserProps>, res: Response) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const boyImage = `https://avatar.iran.liara.run/public/boy?username=${fullName.trim()}`;
    const girlImage = `https://avatar.iran.liara.run/public/girl?username=${fullName.trim()}`;

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      image: gender === 'male' ? boyImage : girlImage,
    });

    if (newUser) {
      generateToken(newUser._id.toString(), res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        gender: newUser.gender,
        image: newUser.image,
      });
      console.log('User registered successfully', newUser);
    } else {
      res.status(400).json({
        error: 'Invalid user data!',
      });
    }
  } catch (error) {
    console.log('Error while registering user', error);
    res.status(500).send('Internal server error');
  }
};

export const loginUser = async (req: Request<{}, {}, UserProps>, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const passwordMatch = await bcryptjs.compare(password, user?.password || '');

    if (!user || !passwordMatch) {
      return res.status(400).json({
        error: 'Incorrect email or password',
      });
    }

    generateToken(user._id.toString(), res);
    {
    }

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      gender: user.gender,
      image: user.image,
    });

    console.log('User logged in successfully', user);
  } catch (error) {
    console.log('Error while Loginging user', error);
    res.status(500).send('Internal server error');
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({
      message: 'User logged out successfully',
    });
    console.log('User logged out successfully');
  } catch (error) {
    console.log('Error while Loginging user', error);
    res.status(500).send('Internal server error');
  }
};
