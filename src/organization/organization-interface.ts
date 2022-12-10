import { OrganizationDTO } from "./organization-dto";
import { UpdateDto } from "./organization-update-dto";

export interface  OrganizationInterface {
    create(createDto: OrganizationDTO): Promise<OrganizationDTO>
    findAll(): Promise<OrganizationDTO[]>
    findOne(id: string): Promise<OrganizationDTO>
    update(id: string, updateDto: UpdateDto): Promise<UpdateDto>
    remove(id: string): Promise<void>
}