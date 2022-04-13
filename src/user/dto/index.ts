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

export class UpdateUserDto {
    @ApiProperty({ example: "Центр нюхателей бебру ", description: "Наименование пользователя", required: false })
    readonly name: string // Наименование

    @ApiProperty({ example: "Санкт-Петербург, улица Красная, 7Б, 36", description: "Адрес пользователя", required: false })
    readonly address: string // Адрес

    @ApiProperty({ example: "89156427809", description: "Номер телефона пользователя", required: false })
    readonly phone_number: string // Номер телефона

    @ApiProperty({ example: "+337348325354", description: "Факс (необязательно)", required: false })
    readonly fax: string // факс

    @ApiProperty({ example: "Иван", description: "Имя пользоватея", required: false })
    readonly first_name: string // имя

    @ApiProperty({ example: "Иванов", description: "Фамилия пользоватея", required: false })
    readonly last_name: string // фамилия

    @ApiProperty({ example: "Иванович", description: "Отчество пользоватея (необязательно)", required: false })
    readonly middle_name: string // Отчество

    @ApiProperty({ example: "Был приведен с сайта example.com, урод тот еще", description: "Заметка о пользователе (необязательно)", required: false })
    readonly notes: string // Заметки работы с клиентом
}

export class BankAccountDto {    
    @ApiProperty({ example: "7712345678", description: "ИНН пользователя" })
    inn: string // Инн клиента

    @ApiProperty({ example: "779101001", description: "КПП пользователя" })
    kpp: string // КПП клиента
    
    @ApiProperty({ example: "40702810123450101230", description: "Банковский счет пользователя" })
    account_number: string // Номер счета

    @ApiProperty({ example: "Московский банк ПАО Сбербанк г. Москва", description: "Регион банка пользователя" })
    region: string // Регион где открыт счет

    @ApiProperty({ example: "044521234", description: "БИК банка пользователя" })
    bik: string // БИК банка
    
    @ApiProperty({ example: "30101234500000000225", description: "К/C пользователя" })
    cb_account_number: string // Корреспондетский счет
}

export class UpdateBankAccountDto {
    @ApiProperty({ example: "7712345678", description: "ИНН пользователя", required: false })
    inn: string // Инн клиента

    @ApiProperty({ example: "779101001", description: "КПП пользователя", required: false })
    kpp: string // КПП клиента
    
    @ApiProperty({ example: "40702810123450101230", description: "Банковский счет пользователя", required: false })
    account_number: string // Номер счета

    @ApiProperty({ example: "Московский банк ПАО Сбербанк г. Москва", description: "Регион банка пользователя", required: false })
    region: string // Регион где открыт счет

    @ApiProperty({ example: "044521234", description: "БИК банка пользователя", required: false })
    bik: string // БИК банка
    
    @ApiProperty({ example: "30101234500000000225", description: "К/C пользователя", required: false })
    cb_account_number: string // Корреспондетский счет
}