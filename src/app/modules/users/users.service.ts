import IUser from './users.interface';
import User from './users.model';

const createUserService = async (user: IUser): Promise<IUser> => {
  console.log('user', user);
  return await User.create(user);
};

const getUsersService = async (): Promise<IUser[] | []> => {
  return await User.find({}).lean();
};

const getUserByIdService = async (id: string): Promise<IUser | null> => {
  return await User.findOne({ _id: id }).lean();
};

export default {
  createUserService,
  getUsersService,
  getUserByIdService,
};
