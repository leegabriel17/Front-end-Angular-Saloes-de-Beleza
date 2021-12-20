import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/error-handler.service';

@Component({
  selector: 'app-gcliente',
  templateUrl: './gcliente.component.html',
  styleUrls: ['./gcliente.component.css']
})
export class GclienteComponent implements OnInit {
  
  clientes = [];

  constructor(
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService) {}

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(): void {
    this.clienteService.listarTodas()
    .then(resultado => {
      this.clientes = resultado;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(cliente: any): void {
    this.clienteService.excluir(cliente.idCliente)
    .then(result => {
      this.listarCliente();

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  buscarCliente(idCliente: number): void {
    this.clienteService.buscarPorCodigo(idCliente)
    .then(resultado => {
      this.clientes = resultado;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
 
}
