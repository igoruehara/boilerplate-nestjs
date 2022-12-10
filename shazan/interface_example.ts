import { _entity_DTO } from "./_entity_-dto";
import { UpdateDto } from "./_entity_-update-dto";

export interface  _entity_Interface {
    create(createDto: _entity_DTO): Promise<_entity_DTO>
    findAll(): Promise<_entity_DTO[]>
    findOne(id: string): Promise<_entity_DTO>
    update(id: string, updateDto: UpdateDto): Promise<UpdateDto>
    remove(id: string): Promise<void>
}