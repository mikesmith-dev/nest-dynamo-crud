import { Module } from '@nestjs/common';
import { DBCrudService } from './dbcrud.service';

@Module({
  providers: [DBCrudService],
  exports: [DBCrudService]
})
export class DBCrudModule {}