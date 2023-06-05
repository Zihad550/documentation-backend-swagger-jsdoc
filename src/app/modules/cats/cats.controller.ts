import { Request, Response } from 'express';
import catsService from './cats.service';

const createCat = async (req: Request, res: Response) => {
  try {
    const { cat } = req.body;
    const result = await catsService.createCatService(cat);
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

const getAllCat = async (req: Request, res: Response) => {
  try {
    const result = await catsService.getAllCatService();
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

const getCatsByOwnerId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await catsService.getCatsByOwnerIdService(id);
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

const getCatById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await catsService.getCatByIdService(id);
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
  createCat,
  getAllCat,
  getCatsByOwnerId,
  getCatById,
};
