import { Cliente } from '../model';
import { ErrorHandlerService } from '../error-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-ccliente',
  templateUrl: './ccliente.component.html',
  styleUrls: ['./ccliente.component.css']
})
export class CclienteComponent implements OnInit {

  cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private errorHander: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const codigoCliente = this.route.snapshot.params[`codigo`];
    if (codigoCliente) {
      this.carregarCliente(codigoCliente);
    }
    this.cliente.ativo = false;
  }
  
  salvar(form: NgForm): void {
      this.adicionarCliente(form);
  
  }
  
  carregarCliente(codigo: number): void {
    this.clienteService.buscarPorCodigo(codigo)
      .then(cliente => {
        this.cliente = cliente;
      })
      .catch(erro => this.errorHander.handle(erro));
    }
  
  adicionarCliente(form: NgForm) {
    this.clienteService.adicionar(this.cliente)
      .then(clienteAdicionado => {      
        alert("Solicitacao realizada com sucesso!");
        this.router.navigate(['/gcliente']);      
      })
      .catch(erro => this.errorHander.handle(erro));
    }

   
  }


