import { Schema, model } from 'mongoose';
import ICat from './cats.interface';

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
