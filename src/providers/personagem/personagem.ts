import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personagem } from '../../pages/objects/personagem';
/*
  Generated class for the PersonagemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class PersonagemProvider {
  	public personagens: Array<Personagem>;
  	constructor(public http: HttpClient) {
  		console.log('Hello PersonagemProvider Provider');
  		this.personagens = new Array<Personagem>();
  		this.personagens.push(new Personagem('Bardock', 10));
  		this.personagens.push(new Personagem('Garrosh', 12));
  		this.personagens.push(new Personagem('Billy', 5));
  	}

  	getPersonagens(){
  		return this.personagens;
  	}

  	insertPersonagem(personagem: Personagem){
  		this.personagens.push(personagem);
  	}

    ordenarLista(){
      this.personagens.sort(function(personagem1: Personagem, personagem2: Personagem){
        return personagem1.iniciativa - personagem2.iniciativa;
      });
    }
  }
