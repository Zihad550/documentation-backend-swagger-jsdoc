import { Types } from 'mongoose';

export const useMongoId = (id: string) => {
  return new Types.ObjectId(id);
};
