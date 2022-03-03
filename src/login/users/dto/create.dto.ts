import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Role } from "src/login/auth/enum/role.enum";

export class CreateDto {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()
    password: string;
    role?: Role;
}
