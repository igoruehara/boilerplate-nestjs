import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { _entity_Service } from './_entity_-service';
import { _entity_Controller } from './_entity_-controller';
import { DatabaseModule } from 'src/database/database.module';
import { connectProviders } from './_entity_-connect-provider';
import { _entity_Logic } from './_entity_-logic';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [HttpModule, DatabaseModule, PassportModule],
  controllers: [_entity_Controller],
  providers: [_entity_Logic, _entity_Service, ...connectProviders]
})
export class _entity_Module { }
