import { Component} from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2018, 12, 22),
    dataPagamento: null, valor: 4.75, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 8, 13),
     dataPagamento: new Date(2018, 4, 24), valor: 5000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 9, 23),
     dataPagamento: new Date(2018, 3, 26), valor: 500, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 11, 21),
     dataPagamento: new Date(2018, 2, 15), valor: 150, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 9, 26),
     dataPagamento: new Date(2018, 5, 12), valor: 12000, pessoa: 'Atacado Brasil'},
     {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 7, 17),
     dataPagamento: new Date(2018, 6, 8), valor: 79, pessoa: 'Atacado Brasil'}
  ];
}
