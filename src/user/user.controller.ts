import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BankAccountDto, CreateUserDto } from './dto';
import { UserService } from './user.service';
import { BankAccount, User } from "../models"

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: "Создание нового клиента" })
    @ApiResponse({ status: 200, description: 'Успешное создание пользователя', type: User })
    @ApiResponse({ status: 400, description: 'Ошибка в создании', type: BadRequestException })
    @Post('/')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @ApiOperation({ summary: "Получение всех пользователей" })
    @ApiResponse({ status: 200, type: [User] })
    @Get('all')
    getAllUsers() {
        return this.userService.getUsers()
    }

    @ApiOperation({ summary: 'Установить банковские реквизиты для пользователя' })
    @ApiResponse({ status: 200 })
    @Patch('setBankInfo/:user_uuid')
    setBankAccount(@Param('user_uuid') user_uuid : string,
                   @Body() bankAccountDto: BankAccountDto 
    ) {
        return this.userService.setBankAccount(user_uuid, bankAccountDto)
    }
}
