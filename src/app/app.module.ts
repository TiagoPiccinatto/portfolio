import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ContatoComponent } from './componentes/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SobreComponent,
    NavComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
