import { CreateDto } from "../dto/create.dto";
import { UpdateDto } from "../dto/update.dto";

export interface Interface {
    login(req: any): Promise<any>
    create(createDto: CreateDto): Promise<CreateDto>
    findAll(): Promise<CreateDto[]>
    findOne(id: string): Promise<CreateDto>
    update(id: string, updateDto: UpdateDto): Promise<UpdateDto>
    remove(id: string): Promise<void>
}