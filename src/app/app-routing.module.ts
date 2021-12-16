import { ConfirmarComponent } from './agenda/confirmar/confirmar.component';
import { FazerLoginComponent } from './fazer-login/fazer-login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { GagendaComponent } from './gagenda/gagenda.component';
import { GclienteComponent } from './gcliente/gcliente.component';
import { GfuncionarioComponent } from './gfuncionario/gfuncionario.component';
import { GgservicoComponent } from './ggservico/ggservico.component';
import { GservicoComponent } from './gservico/gservico.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda/confirmar', component: ConfirmarComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'fazerlogin', component: FazerLoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'gservico', component: GservicoComponent },
  { path: 'gcliente', component: GclienteComponent },
  { path: 'gfuncionario', component: GfuncionarioComponent },
  { path: 'ggservico', component: GgservicoComponent },
  { path: 'gagenda', component: GagendaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PaginaNaoEncontradaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
