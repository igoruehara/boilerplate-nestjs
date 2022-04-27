import { UserCreateDto } from "../dto/create.dto";
import { UpdateDto } from "../dto/update.dto";

export interface Interface {
    login(req: any): Promise<any>
    create(createDto: UserCreateDto): Promise<UserCreateDto>
    findAll(): Promise<UserCreateDto[]>
    findOne(id: string): Promise<UserCreateDto>
    update(id: string, updateDto: UpdateDto): Promise<UpdateDto>
    remove(id: string): Promise<void>
}