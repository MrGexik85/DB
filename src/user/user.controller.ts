import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BankAccountDto, CreateUserDto, UpdateBankAccountDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';
import { User } from "../models"

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: "Создание нового клиента" })
    @ApiResponse({ status: 200, description: 'Успешное создание пользователя', type: User })
    @ApiResponse({ status: 400, description: 'Ошибка в создании', type: BadRequestException })
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @ApiOperation({ summary: "Получение всех пользователей" })
    @ApiResponse({ status: 200, type: [User] })
    @Get('all')
    getAllUsers() {
        return this.userService.getUsers()
    }

    @ApiOperation({ summary: "Получение пользователя по его id" })
    @ApiResponse({ status: 200, type: User })
    @ApiParam({ name: 'user_uuid' })
    @Get('/:user_uuid')
    getUser(@Param('user_uuid') user_uuid: string) {
        return this.userService.getUser(user_uuid)
    }

    @ApiOperation({ summary: "Обновить данные пользователя" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'user_uuid' })
    @Patch('/:user_uuid')
    updateUser(@Param('user_uuid') user_uuid: string,
               @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(user_uuid, updateUserDto)
    }

    @ApiOperation({ summary: "Удалить пользователя" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'user_uuid' })
    @Delete('/:user_uuid')
    deleteUser(@Param('user_uuid') user_uuid: string) {
        return this.userService.deleteUser(user_uuid)
    }

    @ApiOperation({ summary: 'Установить банковские реквизиты для пользователя' })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'user_uuid' })
    @Patch('setBankInfo/:user_uuid')
    setBankAccount(@Param('user_uuid') user_uuid : string,
                   @Body() bankAccountDto: BankAccountDto 
    ) {
        return this.userService.setBankAccount(user_uuid, bankAccountDto)
    }

    @ApiOperation({ summary: "Обновить банковские реквизиты для пользователя" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'user_uuid' })
    @Patch('updateBankAccount/:user_uuid')
    updateBankAccount(@Param('user_uuid') user_uuid: string,
                      @Body() updateBankAccount: UpdateBankAccountDto
    ) {
        return this.userService.updateBankAccount(user_uuid, updateBankAccount)
    } 

    @ApiOperation({ summary: "Удалить банковские реквизиты для пользователя" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'user_uuid' })
    @Delete('deleteBankAccout/:user_uuid')
    deleteBankAccount(@Param('user_uuid') user_uuid: string) {
        return this.userService.deleteBankAccount(user_uuid)
    }
}
