import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosGridComponent} from './lancamentos-grid/lancamentos-grid.component';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';
import {DataTableModule} from 'primeng/datatable';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule


  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosGridComponent,
    LancamentosPesquisaComponent,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule {
}
