import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "./user.model"
import { v4 as uuid } from "uuid"



@Table({ tableName: "bank_accounts" })
export class BankAccount extends Model<BankAccount> {
    @ApiProperty({ example: "2444833a-e59f-4d7d-8cc0-329acdcdb84a", description: "Уникальный идентификатор записи" })
    @Column({ type: DataType.UUID, primaryKey: true, unique: true, defaultValue: DataType.UUIDV4 })
    id: string
    
    @ApiProperty({ example: "7712345678", description: "ИНН пользователя" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    inn: string // Инн клиента

    @ApiProperty({ example: "779101001", description: "КПП пользователя" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    kpp: string // КПП клиента
    
    @ApiProperty({ example: "40702810123450101230", description: "Банковский счет пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    account_number: string // Номер счета

    @ApiProperty({ example: "Московский банк ПАО Сбербанк г. Москва", description: "Регион банка пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    region: string // Регион где открыт счет

    @ApiProperty({ example: "044521234", description: "БИК банка пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    bik: string // БИК банка
    
    @ApiProperty({ example: "30101234500000000225", description: "К/C пользователя" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    cb_account_number: string // Корреспондетский счет

    @HasOne(() => User, { onDelete: "cascade" })
    user: User // Связь на таблицу 'users'
}