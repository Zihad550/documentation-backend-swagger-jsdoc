import { Types } from 'mongoose';

export default interface ICat {
  name: string;
  nickname: string;
  ownerId: Types.ObjectId;
}
