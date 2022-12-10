import { LoginModule } from './login/users/module';
import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/common"
import { connectProviders } from './login/users/services/connect.providers';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthController } from './health.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants-global';
import { OrganizationModule } from './organization/organization-module';
@Module({
  imports: [DatabaseModule, HttpModule, OrganizationModule, LoginModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  })],
  controllers: [HealthController
  ],
  providers: [
      ...connectProviders],
})
export class AppModule { }
