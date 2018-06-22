import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaIniciativaPage } from '../pages/lista-iniciativa/lista-iniciativa';
import { NovoIniciativaPage } from '../pages/novo-iniciativa/novo-iniciativa';
import { PersonagemProvider } from '../providers/personagem/personagem';
import { KeysPipe } from '../pipes/key/key';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaIniciativaPage,
    NovoIniciativaPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaIniciativaPage,
    NovoIniciativaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonagemProvider
  ]
})
export class AppModule {}
