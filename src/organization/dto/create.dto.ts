import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateOrganizationDto {
    @ApiProperty()
    @IsString()
    name: string;
}
