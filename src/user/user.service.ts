import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, BankAccount } from "../models"
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User,
                @InjectModel(BankAccount) private bankAccountModel: typeof BankAccount
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        try {
            const user = await this.userModel.create(createUserDto)
            return user
        } catch (e) {
            console.error(e);    
            throw new BadRequestException('User creation error')
        }
    }
}
