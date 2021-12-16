import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { FazerLoginComponent } from './fazer-login/fazer-login.component';
import { ConfirmarComponent } from './agenda/confirmar/confirmar.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';
import { ParceirosComponent } from './home/parceiros/parceiros.component';
import { GaleriaComponent } from './home/galeria/galeria.component';

import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

import { GagendaComponent } from './gagenda/gagenda.component';
import { GclienteComponent } from './gcliente/gcliente.component';
import { GfuncionarioComponent } from './gfuncionario/gfuncionario.component';
import { GgservicoComponent } from './ggservico/ggservico.component';
import { HttpClientModule } from '@angular/common/http';
import { GservicoComponent } from './gservico/gservico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AgendaComponent,
    LoginComponent,
    ProdutosComponent,
    ServicosComponent,
    PaginaNaoEncontradaComponent,
    FazerLoginComponent,
    ConfirmarComponent,
    QuemSomosComponent,
    ParceirosComponent,
    GaleriaComponent,
    ClienteComponent,
    FuncionarioComponent,
    GservicoComponent,
    GagendaComponent,
    GclienteComponent,
    GfuncionarioComponent,
    GgservicoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
