import {HttpClient} from '@angular/common/http';
import {EnderecoModel} from '../model/endereco.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CepService {

  constructor(private httpClient: HttpClient) {

  }
  getEnderecoViaCep(cep: string) {
    console.log()
    return this.httpClient.get<EnderecoModel>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
