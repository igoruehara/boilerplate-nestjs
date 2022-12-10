import { forwardRef, Module } from '@nestjs/common';
import { LoginService } from "../services/core.service"
import { Service as ServiceUser } from "./services/core.service"
import {  UserController } from './controller/core.controller';
import { LogicService as UserLogicService } from './services/logic.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/constants-global';
import { CriptService } from '../utils/bcrypt.service';
import { PassportModule } from '@nestjs/passport';
import { connectProviders } from './services/connect.providers';
import { LocalStrategy } from '../auth/generate-auth.ts/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
import { RequestService } from './services/request.service';
import { HttpModule } from '@nestjs/axios';
@Module({
    imports: [HttpModule, DatabaseModule, PassportModule,
        JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: '999d' } })],
    controllers: [UserController],
    providers: [LoginService, RequestService, CriptService, UserLogicService, LocalStrategy, JwtStrategy, ServiceUser, ...connectProviders],
    exports: []
})
export class LoginModule { }
