import {Component, Input, Output} from '@angular/core';
import {EnderecoModel} from '../model/endereco.model';
import {CepService} from '../cep/cep.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})

export class PessoaCadastroComponent {

  @Input() enderecoModel: EnderecoModel;

  constructor(private cepService: CepService) {}

  getEndereco(cep: any) {
    console.log(cep.value);
    this.cepService.getEnderecoViaCep(cep.value).subscribe(endereco => {
      if (endereco.erro === true) {
        this.enderecoModel = undefined;
      } else {
        this.enderecoModel = endereco;
      }
      });

  }
}
