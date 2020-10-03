import { EscopoMensagem } from './escopo-mensagem';

export interface Conversa{
  id: number;
  nome: string;
  status: string;
  foto: string;
  mensagens: Array<EscopoMensagem>;
}
