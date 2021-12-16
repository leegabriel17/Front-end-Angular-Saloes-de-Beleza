import { Cliente } from './../model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '../error-handler.service';

import { ClienteService } from './../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoCliente = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo cliente');

    /*if (codigoCliente) {
      this.carregarCliente(codigoCliente);
    }*/
  }

  get editando() {
    return Boolean(this.cliente.codigo)
  }

  /*carregarCliente(codigo: number) {
    this.clienteService.buscarPorCodigo(codigo)
      .then(cliente => {
        this.cliente = cliente;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCliente(form);
    } 
    else {
      this.adicionarCliente(form);
    }
  }

  adicionarCliente(form: FormControl) {
    this.clienteService.adicionar(this.cliente)
      .then(clienteAdicionada => {
        this.router.navigate(['/cliente', clienteAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCliente(form: FormControl) {
    this.clienteService.atualizar(this.cliente)
      .then(cliente => {
        this.cliente = cliente;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.cliente = new Cliente();
    }.bind(this), 1);

    this.router.navigate(['/gcliente']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de cliente: ${this.cliente.nome}`);
  }*/

}
