import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BankAccount, Supplier } from 'src/models';
import { CreateSupplierDto } from './dto';

@Injectable()
export class SupplierService {
    constructor(@InjectModel(Supplier) private supplierModel: typeof Supplier,
                @InjectModel(BankAccount) private bankAccountModel: typeof BankAccount) {}

    async createSupplier(createSupplierDto: CreateSupplierDto) {
        throw new BadRequestException({ message: "Not implemented" })
    }

    async getSuppliers() {
        throw new BadRequestException({ message: "Not implemented" })
    }

    async getSupplier(supplier_uuid: string) {
        throw new BadRequestException({ message: "Not implemented" })
    }
}
