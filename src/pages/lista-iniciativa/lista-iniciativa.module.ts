import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaIniciativaPage } from './lista-iniciativa';

@NgModule({
  declarations: [
    ListaIniciativaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaIniciativaPage),
  ],
})
export class ListaIniciativaPageModule {}
