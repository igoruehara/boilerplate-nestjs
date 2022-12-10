import { HttpStatus, Inject } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_NAME } from './organization-constants-model';
import { OrganizationDTO } from './organization-dto';
import { UpdateDto } from './organization-update-dto';
import { OrganizationInterface } from './organization-interface';
import { OrganizationEntity } from './organization-schema';

@Injectable()
export class OrganizationService implements OrganizationInterface {
  constructor(@Inject(MODEL_NAME)
  private model: Model<OrganizationEntity>,) { }

  async create(createDto: OrganizationDTO): Promise<OrganizationEntity> {
    return new this.model(createDto).save();
  }

  async findAll(): Promise<OrganizationEntity[]> {
    const response = await this.model.find();
    if (!response) {
      throw new HttpException("NOT FOUND", HttpStatus.NOT_FOUND)
    }
    return response
  }

  async findOne(id: string): Promise<OrganizationEntity> {
    return await this.model.findById(id);
  }

  async update(id: string, updateDto: UpdateDto): Promise<OrganizationEntity> {
    return await this.model.findOneAndUpdate({ _id: id }, updateDto);
  }

  async remove(id: string): Promise<any> {
   return  await this.model.findOneAndRemove({ _id: id })
  }
}
