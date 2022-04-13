import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "Центр нюхателей бебру ", description: "Наименование пользователя" })
    readonly name: string // Наименование
    
    @ApiProperty({ example: "123456", description: "Пароль пользователя" })
    readonly password: string // Пароль, не юзается в нашей проге, нужен для правдоподобности приложения

    @ApiProperty({ example: "Санкт-Петербург, улица Красная, 7Б, 36", description: "Адрес пользователя" })
    readonly address: string // Адрес

    @ApiProperty({ example: "89156427809", description: "Номер телефона пользователя" })
    readonly phone_number: string // Номер телефона

    @ApiProperty({ example: "+337348325354", description: "Факс (необязательно)", required: false })
    readonly fax: string // факс

    @ApiProperty({ example: "Иван", description: "Имя пользоватея" })
    readonly first_name: string // имя

    @ApiProperty({ example: "Иванов", description: "Фамилия пользоватея" })
    readonly last_name: string // фамилия

    @ApiProperty({ example: "Иванович", description: "Отчество пользоватея (необязательно)", required: false })
    readonly middle_name: string // Отчество

    @ApiProperty({ example: "Был приведен с сайта example.com, урод тот еще", description: "Заметка о пользователе (необязательно)", required: false })
    readonly notes: string // Заметки работы с клиентом
}