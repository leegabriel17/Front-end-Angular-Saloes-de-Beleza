
import { Funcionario } from './../../model';
import { ErrorHandlerService } from './../../error-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './cfuncionario.component.html',
  styleUrls: ['./cfuncionario.component.css']
})
export class CfuncionarioComponent implements OnInit {

  funcionario = new Funcionario();

  cboEspecialidades = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private errorHander: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

ngOnInit(): void {
  const codigoFuncionario = this.route.snapshot.params[`codigo`];
  if (codigoFuncionario) {
    this.carregarFuncionario(codigoFuncionario);
  }
  this.funcionario.ativo = false;
}

salvar(form: NgForm): void {
    this.adicionarfuncionario(form);

}

carregarFuncionario(codigo: number): void {
  this.funcionarioService.buscarPorCodigo(codigo)
    .then(funcionario => {
      this.funcionario = funcionario;
    })
    .catch(erro => this.errorHander.handle(erro));
  }

adicionarfuncionario(form: NgForm) {
  this.funcionarioService.adicionar(this.funcionario)
    .then(funcionarioAdicionado => {      
      alert("Criado com sucesso!");
      this.router.navigate(['/gfuncionario']);      
    })
    .catch(erro => this.errorHander.handle(erro));
  }
}




    /*this.selectControl.valueChanges.subscribe((value: any) => {
      console.log('Selected value:', value);
    })

    const codigoFuncionario = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo funcionario');

    if (codigoFuncionario) {
      this.carregarFuncionario(codigoFuncionario);
    }
  }

  get editando() {
    return Boolean(this.funcionario.codigo)




  carregarFuncionario(codigo: number) {
    this.funcionarioService.buscarPorCodigo(codigo)
      .then(funcionario => {
        this.funcionario = funcionario;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarFuncionario(form);
    } else {
      this.adicionarFuncionario(form);
    }
  }

  adicionarFuncionario(form: FormControl) {
    this.funcionarioService.adicionar(this.funcionario)
      .then(funcionarioAdicionada => {
        //this.toasty.success('Funcionario adicionado com sucesso!');
        this.router.navigate(['/funcionarios', funcionarioAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarFuncionario(form: FormControl) {
    this.funcionarioService.atualizar(this.funcionario)
      .then(funcionario => {
        this.funcionario = funcionario;

        //this.toasty.success('Funcionario alterado com sucesso!');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.funcionario = new Funcionario();
    }.bind(this), 1);

  }*/


