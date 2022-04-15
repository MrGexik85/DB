import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BankAccount, Supplier } from 'src/models';

@Module({
  providers: [SupplierService],
  controllers: [SupplierController],
  imports: [
    SequelizeModule.forFeature([BankAccount, Supplier])
  ]
})
export class SupplierModule {}
