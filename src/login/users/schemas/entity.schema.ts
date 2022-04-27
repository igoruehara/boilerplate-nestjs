import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/login/auth/enum/role.enum';
import { COLLECTION_NAME } from '../constants/constants';

export const EntitySchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

@Schema({ collection: COLLECTION_NAME })
export class Entity extends Document {
    _id: string;
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    role: Role;
}