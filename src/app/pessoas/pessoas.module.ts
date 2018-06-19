import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';
import {PessoaPesquisaComponent} from './pessoa-pesquisa/pessoa-pesquisa.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputMaskModule} from 'primeng/inputmask';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'primeng/datatable';
import {PessoaGridComponent} from './pessoa-grid/pessoa-grid.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoaGridComponent,
    PessoaPesquisaComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ]
})
export class PessoasModule {
}
