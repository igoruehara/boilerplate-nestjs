import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Inject, forwardRef } from '@nestjs/common';
import { Service } from '../services/core.service';
import { UserCreateDto } from '../dto/create.dto';
import { Interface } from '../interface/Interface';
import { LoginService } from 'src/login/services/core.service';
import { UpdateDto } from '../dto/update.dto';
import { JwtAuthGuard } from 'src/login/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RequestService } from '../services/request.service';
import { RolesGuard } from 'src/login/auth/generate-auth.ts/roles.guard';
import { Role } from 'src/login/auth/enum/role.enum';
import { Roles } from 'src/login/auth/decorators/roles.decorator';
import { LocalAuthGuard } from 'src/login/auth/generate-auth.ts/local-auth.guard';
import { LoginDto } from '../dto/login.dto';

@Controller('api')
export class UserController implements Interface {
  constructor(private readonly service: Service,
    @Inject(forwardRef(() => LoginService))
    private loginService: LoginService, private requestService: RequestService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() login: LoginDto): Promise<any> {
  //this.requestService.request()
    return await this.loginService.login(login)
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Post('users')
  async create(@Body() createDto: UserCreateDto): Promise<UserCreateDto> {
    return await this.service.create(createDto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('users')
  async findAll(): Promise<UserCreateDto[]> {
    return await this.service.findAll();
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('users/:id')
  async findOne(@Param('id') id: string): Promise<UserCreateDto> {
    return this.service.findOne(id);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Patch('users/:id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<UpdateDto> {
    return this.service.update(id, updateDto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Delete('users/:id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
