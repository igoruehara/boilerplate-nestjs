import { Connection } from 'mongoose';
import { STRING_URL_DATABASE_CONNECTION } from '../constants-global';
import { CONNECTION_MODEL_NAME, MODEL_NAME } from './_entity_-constants-model';
import { EntitySchema } from './_entity_-schema';

export const connectProviders = [
  {
    provide: MODEL_NAME,
    useFactory: (connection: Connection) =>
      connection.model(CONNECTION_MODEL_NAME, EntitySchema),
    inject: [STRING_URL_DATABASE_CONNECTION],
  },
];
