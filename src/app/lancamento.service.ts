import {FormControl} from '@angular/forms';
import {CategoriaModel} from './model/categoria.model';
import {PessoaModel} from './model/pessoa.model';
import {LancamentoModel} from './model/lancamento.model';
import {LogService} from './log.service';

export class LancamentoService {

  lancamentos = [];
  ultimoId = 0;
  lancamentoModel = new LancamentoModel();

  adicionar(form: any) {

    this.lancamentoModel.vencimento = form.value.vencimento;
    this.lancamentoModel.recebimentoPagamento = form.value.recebimentoPagamento;
    this.lancamentoModel.descricao = form.value.descricao;
    this.lancamentoModel.valor = form.value.valor;
    this.lancamentoModel.categoriaId = form.value.categoria;
    this.lancamentoModel.pessoaId = form.value.pessoa;
    this.lancamentoModel.observacao = form.value.observacao;

    this.lancamentos.push(this.lancamentoModel);

  }

  consultar() {
    return this.lancamentos;
  }
}

export class LancamentoServiceAbreviado extends LancamentoService {

  constructor(// private numeroCaracteres: number,
              private logService: LogService) {
    super();
  }

  adicionar(form: any) {
    this.logService.log('Adicionando ' + form.value.descricao);
    super.adicionar(form);
  }
}
