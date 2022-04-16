import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BankAccount, Supplier } from 'src/models';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';

@Injectable()
export class SupplierService {
    constructor(@InjectModel(Supplier) private supplierModel: typeof Supplier,
                @InjectModel(BankAccount) private bankAccountModel: typeof BankAccount) {}

    async createSupplier(createSupplierDto: CreateSupplierDto) {
        try {
            const supplier = await this.supplierModel.create(createSupplierDto)
            return supplier
        } catch (e) {
            console.error(e);    
            throw new BadRequestException({ message: 'Supplier creation error' })
        }
    }

    async getSuppliers() {
        const suppliers = this.supplierModel.findAll({include: {all: true}})
        return suppliers
    }

    async getSupplier(supplier_uuid: string) {
        const supplier = await this.supplierModel.findOne({ where: { id: supplier_uuid }, include: { all: true } })
        return supplier
    }

    async updateSupplier(supplier_uuid: string, updateSupplierDto: UpdateSupplierDto) {
        throw new BadRequestException({ message: "Not implemented" })
    }

    async deleteSupplier(supplier_uuid: string) {
        throw new BadRequestException({ message: "Not implemented" })
    }
}
