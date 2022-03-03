import { Connection } from 'mongoose';
import { STRING_URL_DATABASE_CONNECTION } from 'src/constants';
import { CONNECTION_MODEL_NAME, MODEL_NAME } from '../constants/constants';
import { EntitySchema } from '../schemas/entity.schema';

export const connectProviders = [
  {
    provide: MODEL_NAME,
    useFactory: (connection: Connection) =>
      connection.model(CONNECTION_MODEL_NAME, EntitySchema),
    inject: [STRING_URL_DATABASE_CONNECTION],
  },
];
