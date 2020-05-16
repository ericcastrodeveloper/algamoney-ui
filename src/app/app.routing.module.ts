import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastroComponent } from "./pessoas/pessoa-cadastro/pessoa-cadastro.component";
import { PessoaPesquisaComponent } from "./pessoas/pessoa-pesquisa/pessoa-pesquisa.component";
import { PessoaGridComponent } from "./pessoas/pessoa-grid/pessoa-grid.component";
import { LancamentosGridComponent } from "./lancamentos/lancamentos-grid/lancamentos-grid.component";
import { LancamentoCadastroComponent } from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { LancamentosPesquisaComponent } from "./lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
    { path: "pessoas/cadastro", component: PessoaCadastroComponent },
    { path: "pessoas", component: PessoaGridComponent },
    { path: "pessoas/pesquisa", component: PessoaPesquisaComponent },
    { path: "lancamentos", component: LancamentosGridComponent },
    { path: "lancamentos/cadastro", component: LancamentoCadastroComponent },
    { path: "lancamentos/pesquisa", component: LancamentosPesquisaComponent },
    { path: "", component: AppComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }