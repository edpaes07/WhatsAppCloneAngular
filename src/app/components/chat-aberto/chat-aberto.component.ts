import { Component, Input, OnInit } from '@angular/core';
import { Conversa } from 'src/app/conversa';
import { faEllipsisV, faSearch, faLaughWink, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { EscopoMensagem } from 'src/app/escopo-mensagem';


@Component({
  selector: 'app-chat-aberto',
  templateUrl: './chat-aberto.component.html',
  styleUrls: ['./chat-aberto.component.css']
})
export class ChatAbertoComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  faSearch = faSearch;
  faLaughWink = faLaughWink;
  faPaperclip = faPaperclip;
  faMicrophone = faMicrophone;

  @Input() conversa: Conversa;

  nova: string;

  receberMensagem($event){
    this.conversa = $event;
  }

  novaMensagem(){
    if (this.nova !== undefined && this.nova.trim().length > 0) {
      let d = new Date();
      this.conversa.mensagens.push(
        new EscopoMensagem(true,
          this.nova,
          `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`)
      )
      this.nova = '';
      let element = document.querySelector(".conversa-chat");
      element.scrollTo(0, element.scrollHeight);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
