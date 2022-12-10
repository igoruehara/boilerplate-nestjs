import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { _entity_Service } from './_entity_-service';
import { _entity_Dto } from './_entity_-dto';
import { _entity_Interface } from './_entity_-interface';
import { UpdateDto } from './_entity_-update-dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/login/auth/generate-auth.ts/roles.guard';
import { Roles } from 'src/login/auth/decorators/roles.decorator';
import { Role } from 'src/login/auth/enum/role.enum';

@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
@Controller('api')
export class _entity_Controller implements _entity_Interface {
  constructor(private readonly service: _entity_Service) { }

  @Post('_entity_')
  async create(@Body() createDto: _entity_Dto): Promise<_entity_Dto> {
    return await this.service.create(createDto);
  }

  @Get('_entity_')
  async findAll(): Promise<_entity_Dto[]> {
    return await this.service.findAll();
  }

  @Get('_entity_/:id')
  async findOne(@Param('id') id: string): Promise<_entity_Dto> {
    return await this.service.findOne(id);
  }

  @Patch('_entity_/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<UpdateDto> {
    return await this.service.update(id, updateDto);
  }

  @Delete('_entity_/:id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id);
  }
}
