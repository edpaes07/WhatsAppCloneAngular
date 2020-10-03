export class EscopoMensagem {
  flagMinhaMensagem: boolean;
  mensagem: string;
  horario: string;

  constructor(flag, mensagem, horario){
    this.flagMinhaMensagem = flag;
    this.mensagem = mensagem;
    this.horario = horario;
  }
}
