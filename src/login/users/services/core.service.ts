import { forwardRef, HttpStatus, Inject } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_NAME } from '../constants/constants';
import { UserCreateDto } from '../dto/create.dto';
import { UpdateDto } from '../dto/update.dto';
import { Entity } from '../schemas/entity.schema';
import { CriptService } from '../../utils/bcrypt.service';
@Injectable()
export class Service {
  constructor(@Inject(MODEL_NAME)
  private model: Model<Entity>,
    @Inject(forwardRef(() => CriptService))
    private criptService: CriptService) { }

  async create(createDto: UserCreateDto): Promise<Entity> {
    createDto.password = await this.criptService.password(createDto.password)
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

  async findOneByEmail(email: string): Promise<any> {
    const response = await this.model.find({ email });
    return response
  }

  async update(id: string, updateDto: UpdateDto): Promise<Entity> {
    return this.model.findOneAndUpdate({ _id: id }, updateDto);
  }

  async remove(id: string): Promise<any> {
   return await this.model.findOneAndRemove({ _id: id })
  }
}
