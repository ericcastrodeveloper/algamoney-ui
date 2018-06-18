import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {

    pessoas = [
    {
      nome : 'Eric', cidade: 'São Paulo', estado: 'São Paulo', status: true
    },
    {
      nome : 'Bruna', cidade: 'São Bernardo', estado: 'São Paulo', status: true
    },
    {
      nome : 'José', cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', status: false
    },
    {
      nome : 'Josefina', cidade: 'Salvador', estado: 'Bahia', status: false
    },
    {
      nome : 'Marcus', cidade: 'Rio Branco', estado: 'Acre', status: true
    },
    {
      nome: 'Fabiana', cidade: 'São Paulo', estado: 'São Paulo', status: true
    },
    {
      nome: 'Joãozinho', cidade: 'São Paulo', estado: 'São Paulo', status: false
    },
    {
      nome: 'Luizinho', cidade: 'São Paulo', estado: 'São Paulo', status: true
    }
  ];
}
