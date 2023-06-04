import { NextFunction, Request, Response } from 'express';
import usersService from './users.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body;
    const result = await usersService.createUserService(user);
    res.status(200).json({
      type: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      type: 'error',
      error,
    });
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await usersService.getUsersService();
    res.status(200).json({
      type: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      type: 'error',
      error,
    });
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await usersService.getUserByIdService(id);
    res.status(200).json({
      type: 'success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      type: 'error',
      error,
    });
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
};
