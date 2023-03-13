import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/modules/user/user.module';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { DevicesModule } from './modules/devices/devices.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CustomersModule, DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
