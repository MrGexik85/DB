import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Supplier } from 'src/models';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
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

    @ApiOperation({ summary: "Обновление данных поставщика" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'supplier_uuid' })
    @Put(':supplier_uuid')
    updateSupplier(@Param('supplier_uuid') supplier_uuid: string,
                   @Body() updateSupplierDto: UpdateSupplierDto
    ) {
        return this.supplierService.updateSupplier(supplier_uuid, updateSupplierDto)
    }

    @ApiOperation({ summary: "Удаление данных поставщика" })
    @ApiResponse({ status: 200 })
    @ApiParam({ name: 'supplier_uuid' })
    @Delete(':supplier_uuid')
    deleteSupplier(@Param('supplier_uuid') supplier_uuid: string) {
        return this.supplierService.deleteSupplier(supplier_uuid)
    }
}
