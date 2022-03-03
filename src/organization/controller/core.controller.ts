import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Service } from '../services/core.service';
import { CreateDto } from '../dto/create.dto';
import { Interface } from '../interface/Interface';
import { UpdateDto } from '../dto/update.dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/login/auth/generate-auth.ts/roles.guard';
import { Roles } from 'src/login/auth/decorators/roles.decorator';
import { Role } from 'src/login/auth/enum/role.enum';

@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
@Controller('api')
export class CoreController implements Interface {
  constructor(private readonly service: Service) { }

  @Post('organization')
  async create(@Body() createDto: CreateDto): Promise<CreateDto> {
    return await this.service.create(createDto);
  }

  @Get('organization')
  async findAll(): Promise<CreateDto[]> {
    return await this.service.findAll();
  }

  @Get('organization/:id')
  async findOne(@Param('id') id: string): Promise<CreateDto> {
    return this.service.findOne(id);
  }

  @Patch('organization/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<UpdateDto> {
    return this.service.update(id, updateDto);
  }

  @Delete('organization/:id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
