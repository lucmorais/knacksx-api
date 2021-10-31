export class Usuario {
    private nome: string;
    private tipo: string;
    private email: string;
    private data_nascimento: Date;
    private senha: string;

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