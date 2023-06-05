import { useMongoId } from '../../../utils';
import ICat from './cats.interface';
import Cat from './cats.model';

const createCatService = async (cat: ICat): Promise<ICat> => {
  return await Cat.create(cat);
};

const getAllCatService = async (): Promise<ICat[] | []> => {
  return await Cat.find({});
};

const getCatsByOwnerIdService = async (
  ownerId: string
): Promise<ICat[] | []> => {
  return await Cat.find({ ownerId: useMongoId(ownerId) });
};

const getCatByIdService = async (id: string): Promise<ICat | null> => {
  return await Cat.findOne({ _id: id });
};

export default {
  createCatService,
  getAllCatService,
  getCatsByOwnerIdService,
  getCatByIdService,
};
