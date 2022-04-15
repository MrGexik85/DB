import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Supplier } from 'src/models';
import { CreateSupplierDto } from './dto';
import { SupplierService } from './supplier.service';

@ApiTags('suppliers')
@Controller('supplier')
export class SupplierController {
    constructor(private supplierService: SupplierService) {}

    @ApiOperation({ summary: "Создание нового поставщика" })
    @ApiResponse({ status: 200, type: Supplier })
    @Post()
    createSupplier(@Body() createSupplierDto: CreateSupplierDto) {
        return this.supplierService.createSupplier(createSupplierDto)
    }

    @ApiOperation({ summary: "Получить данные обо всех поставщиках" })
    @ApiResponse({ status: 200, type: [Supplier] })
    @Get('all')
    getAllSuppliers() {
        return this.supplierService.getSuppliers()
    }

    @ApiOperation({ summary: "Получить данные поставщика по его id" })
    @ApiResponse({ status: 200, type: Supplier })
    @ApiParam({ name: 'supplier_uuid' })
    @Get(':supplier_uuid')
    getSupplier(@Param('supplier_uuid') supplier_uuid: string) {
        return this.supplierService.getSupplier(supplier_uuid)
    }
}
