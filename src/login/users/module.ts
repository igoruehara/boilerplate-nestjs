import { forwardRef, Module } from '@nestjs/common';
import { LoginService } from "../services/core.service"
import { Service as ServiceUser } from "./services/core.service"
import { CoreController as UserCoreController } from './controller/core.controller';
import { LogicService as UserLogicService } from './services/logic.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/constants';
import { CriptService } from '../utils/bcrypt.service';
import { PassportModule } from '@nestjs/passport';
import { connectProviders } from './services/connect.providers';
import { LocalStrategy } from '../auth/generate-auth.ts/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
@Module({
    imports: [DatabaseModule, PassportModule,
        JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: '999d' } })],
    controllers: [UserCoreController],
    providers: [LoginService, CriptService, UserLogicService, LocalStrategy, JwtStrategy, ServiceUser, ...connectProviders],
    exports: []
})
export class LoginModule { }
