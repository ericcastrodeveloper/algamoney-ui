import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

import {CurrencyMaskModule} from 'ng2-currency-mask';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CepService} from './cep/cep.service';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core-module/core-module.module';
import {LancamentoService, LancamentoServiceAbreviado} from './lancamento.service';
import {LogService} from './log.service';


// const criarLancamentoService = () => {
//   console.log(`UseFactory`)
// return new LancamentoServiceAbreviado(1);
// };

//OU
// function criarFuncionarioService(){
//
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    FormsModule,
    HttpClientModule,

    CoreModule,
    LancamentosModule,
    PessoasModule
  ],
  providers: [CepService, LogService, LancamentoService,
    // {provide: LancamentoService,
    // useClass: LancamentoServiceAbreviado},
    // useFactory: criarLancamentoService},
    {provide: 'LogPrefixo', useValue: 'LOG'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
