import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Conversa } from 'src/app/conversa';
import { CONVERSAS } from 'src/app/mock-conversas';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.css']
})
export class ConversasComponent implements OnInit {

  conversas = CONVERSAS;

  selectedConversa: Conversa;

  @Output() conversaSelecionada = new EventEmitter();


  notificar(conversa: Conversa):void{
    this.conversaSelecionada.emit(this.selectedConversa = conversa);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
