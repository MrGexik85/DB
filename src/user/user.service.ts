import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, BankAccount } from "../models"
import { BankAccountDto, CreateUserDto, UpdateBankAccountDto, UpdateUserDto } from './dto';

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

    async getUser(user_uuid: string) {
        const user = await this.userModel.findOne({ where: { id: user_uuid }, include: { all: true }})
        return user
    }

    
    async updateUser(user_uuid: string, updateUserDto: UpdateUserDto) {
        try {
            await this.userModel.update(updateUserDto, { where: { id: user_uuid } })
        } catch (e) {
            throw new BadRequestException({ message: "Failed to update user" })
        }
        return { message: "User was updated successfully" }
    }
    
    async deleteUser(user_uuid: string) {
        try {
            await this.userModel.destroy({ where: { id: user_uuid } })
        } catch (e) {
            throw new BadRequestException({ message: "Failed to delete user" })
        }
        return { message: "User was deleted successfully" }
    }

    async setBankAccount(user_uuid: string, bankAccountDto: BankAccountDto) {
        console.log(user_uuid);
        const user = await this.userModel.findOne({ where: { id: user_uuid } })
        if (user) {
            try {
                const bank_account = await this.bankAccountModel.create(bankAccountDto)
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

    async deleteBankAccount(user_uuid: string) {
        const user = await this.userModel.findOne({ where: { id: user_uuid } })
        if (user) {
            if (user.bankaccount_id) {
                await this.bankAccountModel.destroy({ where: { id: user.bankaccount_id } })
                user.bankaccount_id = null
            }
            return { message: "Delete bank account info successfully" }
        } else {
            throw new NotFoundException({ message: "User not found" })
        }
    }

    async updateBankAccount(user_uuid: string, updateBankAccountDto: UpdateBankAccountDto) {
        const user = await this.userModel.findOne({ where: { id: user_uuid } })
        if (user) {
            if (user.bankaccount_id) {
                await this.bankAccountModel.update(updateBankAccountDto, { where: { id: user.bankaccount_id } })
            } else {
                throw new BadRequestException({ message: "User has not bank account yet" })
            }
        } else {
            throw new NotFoundException({ message: "User not found" })
        }
    }
}
