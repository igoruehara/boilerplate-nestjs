import { HttpStatus, Inject } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_NAME } from '../constants/constants';
import { CreateOrganizationDto } from '../dto/create.dto';
import { UpdateDto } from '../dto/update.dto';
import { Interface } from '../interface/Interface';
import { Entity } from '../schemas/entity.schema';

@Injectable()
export class Service implements Interface {
  constructor(@Inject(MODEL_NAME)
  private model: Model<Entity>,) { }

  async create(createDto: CreateOrganizationDto): Promise<Entity> {
    return new this.model(createDto).save();
  }

  async findAll(): Promise<Entity[]> {
    const response = await this.model.find();
    if (!response) {
      throw new HttpException("NOT FOUND", HttpStatus.NOT_FOUND)
    }
    return response
  }

  async findOne(id: string): Promise<Entity> {
    return this.model.findById(id);
  }

  async update(id: string, updateDto: UpdateDto): Promise<Entity> {
    return this.model.findOneAndUpdate({ _id: id }, updateDto);
  }

  async remove(id: string): Promise<void> {
    this.model.findOneAndRemove({ _id: id })
  }
}
