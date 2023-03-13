import { Injectable } from '@nestjs/common';
import { DBCrudService } from 'src/utils/dbcrud/dbcrud.service';

@Injectable()
export class CustomersService {
    constructor(
        private readonly dBConfigService: DBCrudService
    ) {}

    async getAllCustomers(): Promise<any> {
        return await this.dBConfigService.findAll('customers');
    }
    async getUsersByCustomer(id: number): Promise<any> {
        return await this.dBConfigService.findAll('users', 'custId', id);
    }
    async getDevicesByCustomer(id: number): Promise<any> {
        return await this.dBConfigService.findAll('devices', 'custId', id);
    }
    async getCustomerById(id: number): Promise<any> {
        return await this.dBConfigService.findItem('customers', id, 'CustomerId');
    }
}