import { Injectable } from '@nestjs/common';
import { DBCrudService } from 'src/utils/dbcrud/dbcrud.service';

@Injectable()
export class UserService {
    constructor(
        private readonly dBConfigService: DBCrudService
    ) {}

    async getAllUsers(): Promise<any> {
        return await this.dBConfigService.findAll('users');
    }
    async getUsersByCustomer(id: number): Promise<any> {
        return await this.dBConfigService.findAll('users', 'custId', id);
    }
    async getUserById(id: number): Promise<any> {
        return await this.dBConfigService.findItem('users', id, 'userId');
    }
}