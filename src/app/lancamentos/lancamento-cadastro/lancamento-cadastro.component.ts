import {Component, OnInit, Input} from '@angular/core';
import {LancamentoService} from '../../lancamento.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
  ];

  pessoas = [
    {label: 'João da Silva', value: 1},
    {label: 'Sebastião Souza', value: 2},
    {label: 'Maria Abadia', value: 3},
  ];

  constructor(private lancamentoService: LancamentoService) {
  }

  salvar(form: FormControl) {
    console.log(form);
    this.lancamentoService.adicionar(form);
    console.log(`Adicionado com sucesso!`);

  }
}
