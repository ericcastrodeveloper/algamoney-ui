import {CategoriaModel} from './categoria.model';
import {PessoaModel} from './pessoa.model';

export class LancamentoModel {
  vencimento: object;
  recebimentoPagamento: object;
  descricao: string;
  valor: string;
  categoriaId: number;
  pessoaId: number;
  observacao: string;
}
