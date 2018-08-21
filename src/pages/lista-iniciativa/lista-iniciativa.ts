import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Personagem } from '../objects/personagem';
import { PersonagemProvider } from '../../providers/personagem/personagem';
import { NovoIniciativaPage } from '../novo-iniciativa/novo-iniciativa';

/**
 * Generated class for the ListaIniciativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-lista-iniciativa',
 	templateUrl: 'lista-iniciativa.html',
 })
 export class ListaIniciativaPage {
 	public personagens: Array<Personagem>;
 	public rounds:number = 0;
 	public tempoRound:number = 6;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public personagemService: PersonagemProvider) {
 		this.personagens = personagemService.getPersonagens();
 		this.personagemService.ordenarLista(); 		
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ListaIniciativaPage');
 	}

 	novaIniciativa(){
 		this.navCtrl.push(NovoIniciativaPage);
 	}

 	ordenar(){ 		
 		this.personagemService.ordenarLista();
 	}
 	
 	testaRepetido(personagem: Personagem){
 		for(var i = 0; i < this.personagens.length; i++){
 			if(personagem.id != this.personagens[i].id){
 				if(personagem.iniciativa == this.personagens[i].iniciativa){
 					if(personagem.desempate == this.personagens[i].desempate)
 						return true;
 				}
 			}
 		};
 		return false;
 	}

 	proximo(){
 		this.rounds+=1;
 		for(var i = 0; i < this.personagens.length; i++){
 			if(this.personagens[i].ativo){
 				this.personagens[i].ativo = false;
 				if( i < this.personagens.length-1){
 					this.personagens[i+1].ativo = true;
 					return true;
 				}
 			}
 		}
 		this.personagens[0].ativo = true;
 		return true;
 	}

 	calculaTempo(){
 		var totalSegundos = this.tempoRound*this.rounds;
 		if(totalSegundos > 60){
 			var totalMinutos = Math.floor(totalSegundos/60);
 			var restoSegundos = totalSegundos % 60;
 			return totalMinutos + "' " + restoSegundos + "''";
 		}else{
 			//this.tempo =  totalSegundos + " segundos";
 			return totalSegundos + " segundos";
 		}
 	}

 	editarPersonagem(personagem: Personagem){
 		console.log(personagem.nome);
 		this.navCtrl.push(NovoIniciativaPage, {'personagem': personagem});
 	}
 }
