import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationDto } from './create.dto';

export class UpdateDto extends PartialType(CreateOrganizationDto) { }
