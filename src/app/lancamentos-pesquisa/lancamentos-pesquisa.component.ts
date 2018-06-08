import { Component} from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
    dataPagamento: null, valor: 4.75, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/12/2018',
     dataPagamento: '30/05/2018', valor: 5000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/12/2018',
     dataPagamento: '30/05/2018', valor: 5000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/12/2018',
     dataPagamento: '30/05/2018', valor: 5000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/12/2018',
     dataPagamento: '30/05/2018', valor: 5000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/12/2018',
     dataPagamento: '30/05/2018', valor: 5000, pessoa: 'Atacado Brasil'}
  ];
}
