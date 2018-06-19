import {Component} from '@angular/core';
import {EnderecoModel} from '../../model/endereco.model';
import {CepService} from '../../cep/cep.service';


@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})

export class PessoaCadastroComponent {

  enderecoModel = new EnderecoModel();
  cepValue: string;


  constructor(private cepService: CepService) {
  }

  getEndereco(cep: any) {
    console.log(cep.value);
     this.cepValue = cep.value.replace(/_/g, '');
    console.log(this.cepValue);
    if (this.cepValue.length >  8) {
      this.cepService.getEnderecoViaCep(cep.value).subscribe(endereco => {
        this.enderecoModel = endereco;
      });
    }
  }
  salvar(event: any) {
    console.log(event);
  }
}
