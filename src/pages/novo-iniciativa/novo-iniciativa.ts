import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Personagem } from '../objects/personagem';
import { PersonagemProvider } from '../../providers/personagem/personagem';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the NovoIniciativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-novo-iniciativa',
 	templateUrl: 'novo-iniciativa.html'
 })
 export class NovoIniciativaPage {
 	private personagemForm: Personagem;
 	private formNovoPersonagem : FormGroup;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public personagemService: PersonagemProvider, private formBuilder: FormBuilder) {
 		this.personagemForm = new Personagem(null, null);
 		this.formNovoPersonagem = this.formBuilder.group({
 			nome: ['', Validators.required],
 			iniciativa: ['', Validators.required],
 		});
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad NovoIniciativaPage');
 	}

 	salvarPersonagem(personagem: Personagem){
 		this.personagemService.insertPersonagem(personagem);
 		this.navCtrl.pop();
 	}
 }
