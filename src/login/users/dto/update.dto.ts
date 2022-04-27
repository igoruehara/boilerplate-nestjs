import { PartialType } from '@nestjs/mapped-types';
import { UserCreateDto } from './create.dto';

export class UpdateDto extends PartialType(UserCreateDto) { }
