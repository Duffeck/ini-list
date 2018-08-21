import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPersonagensPage } from './lista-personagens';

@NgModule({
  declarations: [
    ListaPersonagensPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPersonagensPage),
  ],
})
export class ListaPersonagensPageModule {}
