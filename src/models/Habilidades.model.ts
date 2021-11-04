export class Habilidade {
    public id: number;
    public titulo: string;
    public descricao: string;
    public nivel: number;

    constructor(
        id: number,
        titulo: string,
        descricao: string,
        nivel: number
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.nivel = nivel;
    }
}