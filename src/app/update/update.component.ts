import { Component, OnInit,Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from "../model";
import { ErrorHandlerService } from 'src/app/error-handler.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  cliente: Cliente;

  constructor(
    private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.id = this.route.snapshot.params['id'];
    
    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        this.cliente = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/gclientes']);
  }

  atualizarCliente(form: NgForm) {
    this.clienteService.atualizar(this.cliente)
      .then(cliente => {
        this.cliente = cliente;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
