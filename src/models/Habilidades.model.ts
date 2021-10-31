export class Habilidades {
    private titulo: string;
    private descricao: string;
    private nivel: number;

    constructor(
        titulo: string,
        descricao: string,
        nivel: number
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.nivel = nivel;
    }
}