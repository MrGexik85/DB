import { ApiProperty } from "@nestjs/swagger"
import { Model, Table, Column, DataType, HasOne, ForeignKey, BelongsTo } from "sequelize-typescript"
import { v4 as uuid } from 'uuid';
import { BankAccount } from "./bank_account.model"

interface CreateUser {
    name: string
    password: string
    address: string
    phone_number: string
    fax: string
    first_name: string
    last_name: string
    middle_name: string
    notes: string
}

@Table({ tableName: 'user' })
export class User extends Model<User, CreateUser> {
    @ApiProperty({ example: "2444833a-e59f-4d7d-8cc0-329acdcdb84a", description: "Уникальный идентификатор пользоватея" })
    @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: DataType.UUIDV4 })
    id: string

    @ApiProperty({ example: "Центр нюхателей бебру ", description: "Наименование пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string // Наименование

    @ForeignKey(() => BankAccount)
    @Column({ type: DataType.UUID, field: 'bankaccount_id', allowNull: true, defaultValue: null })
    bankaccount_id: string
    
    @ApiProperty({ example: "123456", description: "Пароль пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string // Пароль, не юзается в нашей проге, нужен для правдоподобности приложения

    @ApiProperty({ example: "Санкт-Петербург, улица Красная, 7Б, 36", description: "Адрес пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    address: string // Адрес

    @ApiProperty({ example: "89156427809", description: "Номер телефона пользователя" })
    @Column({ type: DataType.STRING, allowNull: false })
    phone_number: string // Номер телефона

    @ApiProperty({ example: "+337348325354", description: "Факс" })
    @Column({ type: DataType.STRING, allowNull: false })
    fax: string // факс

    @ApiProperty({ example: "Иван", description: "Имя пользоватея" })
    @Column({ type: DataType.STRING, allowNull: false })
    first_name: string // имя

    @ApiProperty({ example: "Иванов", description: "Фамилия пользоватея" })
    @Column({ type: DataType.STRING, allowNull: false })
    last_name: string // фамилия

    @ApiProperty({ example: "Иванович", description: "Отчество пользоватея" })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
    middle_name: string // Отчество

    @ApiProperty({ example: "Был приведен с сайта example.com, урод тот еще", description: "Заметка о пользователе" })
    @Column({ type: DataType.TEXT, allowNull: true, defaultValue: null })
    notes: string // Заметки работы с клиентом

    @BelongsTo(() => BankAccount, { onDelete: "SET NULL" })
    bank_account: BankAccount // Связь 1:1 с таблицей 'банковские счета'
}