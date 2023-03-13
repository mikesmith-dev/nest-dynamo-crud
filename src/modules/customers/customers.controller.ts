import {
    Controller,
    Get,
    NotFoundException,
    Param,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
@Controller('customers')
export class CustomersController {
    constructor(
        private readonly CustomersService: CustomersService
    ) {}

    @Get()
    async getCustomers(): Promise<any> {
        const user = await this.CustomersService.getAllCustomers();
        return { status: true, data: user };
    }
    @Get(':id')
    async getUserById(@Param() { id }: any): Promise<any> {
        const user = await this.CustomersService.getCustomerById(id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return { status: true, data: user };
    }
    @Get('users/:id')
    async getUsersByCustomer(@Param() { id }: any): Promise<any> {
        const user = await this.CustomersService.getUsersByCustomer(id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return { status: true, data: user };
    }
    @Get('devices/:id')
    async getDevicesByCustomer(@Param() { id }: any): Promise<any> {
        const user = await this.CustomersService.getDevicesByCustomer(id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return { status: true, data: user };
    }
}