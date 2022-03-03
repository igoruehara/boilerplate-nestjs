import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Service } from './services/core.service';
import { CoreController } from './controller/core.controller';
import { DatabaseModule } from 'src/database/database.module';
import { connectProviders } from './services/connect.providers';
import { LogicService } from './services/logic.service';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [HttpModule, DatabaseModule, PassportModule],
  controllers: [CoreController],
  providers: [LogicService, Service, ...connectProviders]
})
export class OrganizationsModule { }
