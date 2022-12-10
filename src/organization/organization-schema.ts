import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { COLLECTION_NAME } from './organization-constants-model';

export const EntitySchema = new mongoose.Schema({
    name: String
});

@Schema({ collection: COLLECTION_NAME })
export class OrganizationEntity extends Document {
    _id: string;
    @Prop()
    name: string;
}