import {
    Controller,
    Get,
    NotFoundException,
    Param,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
@Controller('devices')
export class DevicesController {
    constructor(
        private readonly devicesService: DevicesService
    ) {}

    @Get()
    async getAllDevices(): Promise<any> {
        const user = await this.devicesService.getAllDevices();
        return { status: true, data: user };
    }
    @Get(':id')
    async getDeviceById(@Param() { id }: any): Promise<any> {
        const user = await this.devicesService.getDeviceById(id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return { status: true, data: user };
    }
}