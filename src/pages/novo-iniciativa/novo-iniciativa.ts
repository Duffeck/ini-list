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
 	private atualizar:boolean = false;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public personagemService: PersonagemProvider, private formBuilder: FormBuilder) {
 		this.personagemForm = new Personagem(null, null, null);
 		this.formNovoPersonagem = this.formBuilder.group({
 			nome: ['', Validators.required],
 			iniciativa: ['', Validators.required],
 			desempate: ['']
 		});
 		/*console.log(this.navParams.get('personagem').nome);
 		//if(this.navParams.get('personagem') != undefined){
 			this.personagemForm.nome = this.navParams.get('personagem').nome;
 			console.log(this.personagemForm);
 		//}
 		*/
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad NovoIniciativaPage');
 		if(this.navParams.get('personagem') != undefined){
 			this.personagemForm = this.navParams.get('personagem');
 			this.atualizar = true;
 		}
 	}

 	salvarPersonagem(personagem: Personagem){
 		if(this.atualizar){
 			this.personagemService.updatePersonagem(personagem);
 		}else{
 			this.personagemService.insertPersonagem(personagem);
 		}
 		this.personagemService.ordenarLista();
 		this.navCtrl.pop();
 	}
 }
