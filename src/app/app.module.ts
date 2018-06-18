import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CepService} from './cep/cep.service';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent,
    LancamentoCadastroComponent,
    MessageComponent,
    PessoaCadastroComponent,
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
    HttpClientModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
