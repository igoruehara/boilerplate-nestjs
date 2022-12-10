import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class _entity_Dto {
    @ApiProperty()
    @IsString()
    name: string;
}

