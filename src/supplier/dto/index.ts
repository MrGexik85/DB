import { ApiProperty } from "@nestjs/swagger"


export class CreateSupplierDto {
    @ApiProperty({ example: "Улица Пушкина, дом Колотушкмна", description: "Адрес поставщика"})
    address: string

    @ApiProperty({example: "Иванов И.И.", description: "Имя директора", required: false },)
    director: string

    @ApiProperty({ example: "Кукушкина А.Е.", description: "Имя бухгалтера", required: false })
    accountant: string
}

export class UpdateSupplierDto {
    @ApiProperty({ example: "Улица Пушкина, дом Колотушкмна", description: "Адрес поставщика", required: false})
    address: string

    @ApiProperty({example: "Иванов И.И.", description: "Имя директора", required: false })
    director: string

    @ApiProperty({ example: "Кукушкина А.Е.", description: "Имя бухгалтера", required: false })
    accountant: string
}