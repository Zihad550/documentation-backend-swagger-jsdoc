import { Schema, model } from 'mongoose';
import IUser from './users.interface';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         name:
 *           type: object
 *           required:
 *              - firstName
 *              - lastName
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             middleName:
 *               type: string
 *         password:
 *           type: string
 *         address:
 *           type: object
 *           properties:
 *             city:
 *               type: string
 *             country:
 *               type: string
 *     CreateUserResponse:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          email:
 *            type: string
 *          name:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                 type: string
 *              middleName:
 *                type: string
 *          address:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *          createdAt:
 *             type: string
 *          updatedAt:
 *             type: string
 */

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
