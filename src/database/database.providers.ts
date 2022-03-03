// src/database/database.providers.ts
import * as mongoose from 'mongoose';
import { MONO_DB_CONNECTION_STRING, STRING_URL_DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: STRING_URL_DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }),
  },
];
