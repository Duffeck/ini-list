import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoPersonagemPage } from './novo-personagem';

@NgModule({
  declarations: [
    NovoPersonagemPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoPersonagemPage),
  ],
})
export class NovoPersonagemPageModule {}
