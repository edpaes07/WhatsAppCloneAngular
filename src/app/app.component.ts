import { Component, Input } from '@angular/core';
import { Conversa } from './conversa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public eventoCallback(dados: Conversa): void {
    alert('Click no pais: ' + dados.nome);
  }
}
