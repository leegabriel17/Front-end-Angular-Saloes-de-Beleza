import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


import { ErrorHandlerService } from '../error-handler.service';
import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from '../model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  selectControl = new FormControl('1');
  funcionario = new Funcionario();

  option = [
    { value: '1', label: 'Spa' },
    { value: '2', label: 'Eventos' },
    { value: '3', label: 'Cuidados Femininos' },
    { value: '', label: 'Cuidados Masculinos' },
  ];

  constructor(
    private funcionarioService: FuncionarioService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

ngOnInit() {
    this.selectControl.valueChanges.subscribe((value: any) => {
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
  }

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

  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de funcionario: ${this.funcionario.nome}`);
  }

}
