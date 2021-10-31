export class Usuario {
    readonly nome: string;
    readonly tipo: string;
    readonly email: string;
    readonly data_nascimento: Date;
    readonly senha: string;

    constructor(
        nome: string,
        tipo: string,
        email: string,
        data_nascimento: Date,
        senha: string,
    ) {
        this.nome = nome;
        this.tipo = tipo;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.senha = senha;
    }
}