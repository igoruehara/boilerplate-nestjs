import { LoginModule } from './login/users/module';
import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/common"
import { connectProviders } from './login/users/services/connect.providers';
import { connectProviders as connectProvidersOrganization } from './organization/services/connect.providers';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { OrganizationsModule } from './organization/module';
import { HealthController } from './health.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants';
@Module({
  imports: [DatabaseModule, HttpModule, OrganizationsModule, LoginModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  })],
  controllers: [HealthController
  ],
  providers: [
    ...connectProvidersOrganization, ...connectProviders],
})
export class AppModule { }
