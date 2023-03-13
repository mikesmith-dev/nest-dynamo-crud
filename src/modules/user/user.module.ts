import { Module } from '@nestjs/common';
import { DBCrudModule } from 'src/utils/dbcrud/dbcrud.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DBCrudModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
