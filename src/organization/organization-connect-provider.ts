import { Connection } from 'mongoose';
import { STRING_URL_DATABASE_CONNECTION } from '../constants-global';
import { CONNECTION_MODEL_NAME, MODEL_NAME } from './organization-constants-model';
import { EntitySchema } from './organization-schema';

export const connectProviders = [
  {
    provide: MODEL_NAME,
    useFactory: (connection: Connection) =>
      connection.model(CONNECTION_MODEL_NAME, EntitySchema),
    inject: [STRING_URL_DATABASE_CONNECTION],
  },
];
