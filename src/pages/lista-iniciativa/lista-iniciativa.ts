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
 	//public ativoKey:number = -1;
 	public personagemAtivo:Personagem;
 	public rounds:number = 0;
 	//public tempo: string = "0 segundos";
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
 	
 	testaAtivo(idAtivo:number){
 		console.log('teste');
 		if(this.personagemAtivo != undefined){
 			return (idAtivo == this.personagemAtivo.id);
 		}
 		return false;
 	}

 	testaRepetido(personagem: Personagem){
 		console.log('testou');
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
 		if(this.personagemAtivo!=undefined){
 			var index = this.personagens.indexOf(this.personagemAtivo);
 			if(index < this.personagens.length-1){
 				this.personagemAtivo = this.personagens[index+1];
 			}else{
 				this.personagemAtivo = this.personagens[0];	
 			}
 			this.rounds+=1;
 		}else{
 			this.personagemAtivo = this.personagens[0];
 		}
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
