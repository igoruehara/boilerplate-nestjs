import { CreateOrganizationDto } from "../dto/create.dto";
import { UpdateDto } from "../dto/update.dto";

export interface Interface {
    create(createDto: CreateOrganizationDto): Promise<CreateOrganizationDto>
    findAll(): Promise<CreateOrganizationDto[]>
    findOne(id: string): Promise<CreateOrganizationDto>
    update(id: string, updateDto: UpdateDto): Promise<UpdateDto>
    remove(id: string): Promise<void>
}