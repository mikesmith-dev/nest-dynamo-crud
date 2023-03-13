import {
    Controller,
    Get,
    NotFoundException,
    Param,
} from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async createUser(): Promise<any> {
        const user = await this.userService.getAllUsers();
        return { status: true, data: user };
    }
    @Get(':id')
    async getUserById(@Param() { id }: any): Promise<any> {
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return { status: true, data: user };
    }
}