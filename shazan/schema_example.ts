import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { COLLECTION_NAME } from './_entity_-constants-model';

export const EntitySchema = new mongoose.Schema({
    name: String
});

@Schema({ collection: COLLECTION_NAME })
export class _entity_Entity extends Document {
    _id: string;
    @Prop()
    name: string;
}