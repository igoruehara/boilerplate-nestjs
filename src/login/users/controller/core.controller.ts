import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Inject, forwardRef } from '@nestjs/common';
import { Service } from '../services/core.service';
import { CreateDto } from '../dto/create.dto';
import { Interface } from '../interface/Interface';
import { LoginService } from 'src/login/services/core.service';
import { UpdateDto } from '../dto/update.dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RequestService } from '../services/request.service';
import { RolesGuard } from 'src/login/auth/generate-auth.ts/roles.guard';
import { Role } from 'src/login/auth/enum/role.enum';
import { Roles } from 'src/login/auth/decorators/roles.decorator';

@Controller('api')
export class CoreController implements Interface {
  constructor(private readonly service: Service,
    @Inject(forwardRef(() => LoginService))
    private loginService: LoginService, private requestService: RequestService) { }

  @Post('login')
  async login(@Request() req: any): Promise<any> {
    this.requestService.request()
    return await this.loginService.login(req.body)
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Post('users')
  async create(@Body() createDto: CreateDto): Promise<CreateDto> {
    return await this.service.create(createDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('users')
  async findAll(): Promise<CreateDto[]> {
    return await this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('users/:id')
  async findOne(@Param('id') id: string): Promise<CreateDto> {
    return this.service.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Patch('users/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<UpdateDto> {
    return this.service.update(id, updateDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Delete('users/:id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
