import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { BankAccount } from "./bank_account.model";

interface CreateSupplier {
    address: string
    director: string
    accountant: string
}

@Table({ tableName: 'supplier' })
export class Supplier extends Model<Supplier, CreateSupplier> {
    @ApiProperty({ example: "2444833a-e59f-4d7d-8cc0-329acdcdb84a", description: "Уникальный идентификатор поставщика" })
    @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: DataType.UUIDV4 })
    id: string

    @ApiProperty({ example: "Улица Пушкина, дом Колотушкмна", description: "Адрес поставщика"})
    @Column({ type: DataType.STRING, allowNull: false })
    address: string

    @ApiProperty({example: "Иванов И.И.", description: "Имя директора" })
    @Column({ type: DataType.STRING, allowNull: true })
    director: string

    @ApiProperty({ example: "Кукушкина А.Е.", description: "Имя бухгалтера" })
    @Column({ type: DataType.STRING, allowNull: true })
    accountant: string

    @ForeignKey(() => BankAccount)
    @Column({ type: DataType.UUID, field: 'bankaccount_id', allowNull: true, defaultValue: null })
    bankaccount_id: string

    @BelongsTo(() => BankAccount, { onDelete: "SET NULL" })
    bank_account: BankAccount // Связь 1:1 с таблицей 'банковские счета'
}