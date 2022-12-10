import { HttpStatus, Inject } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_NAME } from './_entity_-constants-model';
import { _entity_DTO } from './_entity_-dto';
import { UpdateDto } from './_entity_-update-dto';
import { _entity_Interface } from './_entity_-interface';
import { _entity_Entity } from './_entity_-schema';

@Injectable()
export class _entity_Service implements _entity_Interface {
  constructor(@Inject(MODEL_NAME)
  private model: Model<_entity_Entity>,) { }

  async create(createDto: _entity_DTO): Promise<_entity_Entity> {
    return new this.model(createDto).save();
  }

  async findAll(): Promise<_entity_Entity[]> {
    const response = await this.model.find();
    if (!response) {
      throw new HttpException("NOT FOUND", HttpStatus.NOT_FOUND)
    }
    return response
  }

  async findOne(id: string): Promise<_entity_Entity> {
    return await this.model.findById(id);
  }

  async update(id: string, updateDto: UpdateDto): Promise<_entity_Entity> {
    return await this.model.findOneAndUpdate({ _id: id }, updateDto);
  }

  async remove(id: string): Promise<any> {
   return  await this.model.findOneAndRemove({ _id: id })
  }
}
