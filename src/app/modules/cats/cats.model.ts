import { Schema, model } from 'mongoose';
import ICat from './cats.interface';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCatInput:
 *       type: object
 *       required:
 *         - name
 *         - nicName
 *         - ownerId
 *       properties:
 *         name:
 *           type: string
 *         nicname:
 *           type: string
 *         ownerId:
 *           type: string
 *     CreateCatResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         nicname:
 *           type: string
 *         ownerId:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 */
const catSchema = new Schema<ICat>({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Cat = model<ICat>('Cat', catSchema);

export default Cat;
