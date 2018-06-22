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
 	public ativo: number = -1;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public personagemService: PersonagemProvider) {
 		this.personagens = personagemService.getPersonagens();
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

 	testaAtivo(key: number){
 		return (key == this.ativo);
 	}

 	proximo(key: number){
 		if(key+1 >= this.personagens.length){
 			this.ativo = 0;
 		}else{
 			this.ativo = key+1;
 		}
 	}
 }
