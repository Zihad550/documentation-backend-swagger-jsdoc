import { Schema, model } from 'mongoose';
import IUser from './users.interface';

const userSchema = new Schema<IUser>({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: String,
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    city: { type: String },
    country: { type: String },
  },
});

const User = model<IUser>('User', userSchema);
export default User;
