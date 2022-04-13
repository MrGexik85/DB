import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';
import { User } from "../models"

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userSerive: UserService) {}

    @ApiOperation({ summary: "Создание нового клиента" })
    @ApiResponse({ status: 200, description: 'Успешное создание пользователя', type: User })
    @ApiResponse({ status: 400, description: 'Ошибка в создании', type: BadRequestException })
    @Post('/')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userSerive.createUser(createUserDto);
    }
}
