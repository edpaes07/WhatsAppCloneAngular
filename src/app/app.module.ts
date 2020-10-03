import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoPerfilComponent } from './components/cabecalho-perfil/cabecalho-perfil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConversasComponent } from './components/conversas/conversas.component';
import { ChatAbertoComponent } from './components/chat-aberto/chat-aberto.component';
import { WhatsAppComponent } from './components/whats-app/whats-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoPerfilComponent,
    ConversasComponent,
    ChatAbertoComponent,
    WhatsAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
