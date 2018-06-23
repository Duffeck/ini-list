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
  		this.personagens.push(new Personagem(1, 'Bardock', 10));
  		this.personagens.push(new Personagem(2, 'Garrosh', 12));
  		this.personagens.push(new Personagem(3, 'Billy', 5));
  	}

  	getPersonagens(){
  		return this.personagens;
  	}

  	insertPersonagem(personagem: Personagem){
      var novoId:number = 0;
      this.personagens.forEach(function(personagem){
        if(personagem.id > novoId){
          novoId = personagem.id;
        }
      });
      personagem.id = novoId+1;
      this.personagens.push(personagem);
    }

    updatePersonagem(personagem: Personagem){

    }

    ordenarLista(){
      this.personagens.sort(function(personagem1: Personagem, personagem2: Personagem){
        if(personagem1.iniciativa - personagem2.iniciativa == 0){
          return personagem1.desempate - personagem2.desempate;
        }
        return personagem2.iniciativa - personagem1.iniciativa;
      });
    }

    getPersonagemPorId(id:number){
      for(var i = 0; i < this.personagens.length; i ++){
        if(this.personagens[i].id == id){
          return this.personagens[i];
        }
      }
    }
  }
