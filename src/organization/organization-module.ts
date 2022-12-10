import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OrganizationService } from './organization-service';
import { OrganizationController } from './organization-controller';
import { DatabaseModule } from 'src/database/database.module';
import { connectProviders } from './organization-connect-provider';
import { OrganizationLogic } from './organization-logic';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [HttpModule, DatabaseModule, PassportModule],
  controllers: [OrganizationController],
  providers: [OrganizationLogic, OrganizationService, ...connectProviders]
})
export class OrganizationModule { }
