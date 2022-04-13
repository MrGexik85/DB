import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, BankAccount } from "../models"
import { BankAccountDto, CreateUserDto } from './dto';

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
            throw new BadRequestException({ message: 'User creation error' })
        }
    }

    async getUsers() {
        const users = await this.userModel.findAll({include: {all: true}})
        return users
    }

    async setBankAccount(user_uuid: string, bankAccountDto: BankAccountDto) {
        console.log(user_uuid);
        const user = await this.userModel.findOne({ where: { id: user_uuid } })
        if (user) {
            try {
                const bank_account = await this.bankAccountModel.create(bankAccountDto)
                user.bank_account = bank_account
                user.bankaccount_id = bank_account.id
                user.save()
                return { message: "Set bank account info succcessfully" }
            } catch (e) {
                throw new NotFoundException({ message: "Validation error" })
            }
        } else {
            throw new NotFoundException({ message: "User not found" })
        }
    }
}
