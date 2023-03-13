import { Injectable } from '@nestjs/common';
import { DBCrudService } from 'src/utils/dbcrud/dbcrud.service';

@Injectable()
export class DevicesService {
    constructor(
        private readonly dBConfigService: DBCrudService
    ) {}

    async getAllDevices(): Promise<any> {
        return await this.dBConfigService.findAll('users');
    }
    async getDeviceById(id: number): Promise<any> {
        return await this.dBConfigService.findAll('devices', 'deviceId', id);
    }
}