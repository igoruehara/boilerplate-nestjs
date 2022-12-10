import { PartialType } from '@nestjs/mapped-types';
import { _entity_DTO } from './_entity_-dto';

export class UpdateDto extends PartialType(_entity_Dto) { }
