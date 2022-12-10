import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganizationService } from './organization-service';
import { OrganizationDTO } from './organization-dto';
import { OrganizationInterface } from './organization-interface';
import { UpdateDto } from './organization-update-dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/login/auth/generate-auth.ts/roles.guard';
import { Roles } from 'src/login/auth/decorators/roles.decorator';
import { Role } from 'src/login/auth/enum/role.enum';

@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
@Controller('api')
export class OrganizationController implements OrganizationInterface {
  constructor(private readonly service: OrganizationService) { }

  @Post('organization')
  async create(@Body() createDto: OrganizationDTO): Promise<OrganizationDTO> {
    return await this.service.create(createDto);
  }

  @Get('organization')
  async findAll(): Promise<OrganizationDTO[]> {
    return await this.service.findAll();
  }

  @Get('organization/:id')
  async findOne(@Param('id') id: string): Promise<OrganizationDTO> {
    return await this.service.findOne(id);
  }

  @Patch('organization/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<UpdateDto> {
    return await this.service.update(id, updateDto);
  }

  @Delete('organization/:id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id);
  }
}
