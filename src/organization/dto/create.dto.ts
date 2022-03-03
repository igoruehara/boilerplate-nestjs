import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDto {
    @ApiProperty()
    @IsString()
    name: string;

}
