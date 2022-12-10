import { PartialType } from '@nestjs/mapped-types';
import { OrganizationDTO } from './organization-dto';

export class UpdateDto extends PartialType(OrganizationDTO) { }
