export class Personagem{
	public id: number;
	public desempate: number;
	public nome: string;
	public iniciativa: number;

	constructor(id:number, nome: string, iniciativa: number){
		this.id = id;
		this.nome = nome;
		this.iniciativa = iniciativa;
	}
}