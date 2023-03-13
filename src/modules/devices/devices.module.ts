import { Module } from '@nestjs/common';
import { DBCrudModule } from 'src/utils/dbcrud/dbcrud.module';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';

@Module({
  imports: [DBCrudModule],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
