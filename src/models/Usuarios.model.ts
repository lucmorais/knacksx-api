export class Usuario {
    public id: number;
    public nome: string;
    public tipo: string;
    public email: string;
    public data_nascimento: Date;
    public senha: string;

    constructor(
        id: number,
        nome: string,
        tipo: string,
        email: string,
        data_nascimento: Date,
        senha: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.senha = senha;
    }
}