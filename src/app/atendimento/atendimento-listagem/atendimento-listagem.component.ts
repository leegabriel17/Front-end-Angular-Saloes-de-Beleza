import { Atendimento } from '../../model';
import { AtendimentoService } from '../atendimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/error-handler.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atendimento-listagem',
  templateUrl: './atendimento-listagem.component.html',
  styleUrls: ['./atendimento-listagem.component.css']
})
export class AtendimentoListagemComponent implements OnInit {

  atendimento = new Atendimento();

  constructor(
    private atendimentoService: AtendimentoService,
    private errorHander: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarAtendimento();
  }

  listarAtendimento(): void {
    this.atendimentoService.listarTodas()
    .then(resultado => {
      this.atendimento = resultado;
    })
    .catch(erro => this.errorHander.handle(erro));
  }

  salvar(form: NgForm): void {
    this.adicionarAtendimento(form);

}
  adicionarAtendimento(form: NgForm) {
    this.atendimentoService.adicionar(this.atendimento)
      .then(atendimentoAdicionado => {
        alert('Solicitacao realizada com sucesso!');
        this.router.navigate(['/atendimento']);
     })
      .catch(erro => this.errorHander.handle(erro));
    }

    excluir(atendimento: any): void {
      this.atendimentoService.excluir(atendimento.codigo)
      .then(result => {
        this.listarAtendimento();

        })
        .catch(erro => this.errorHander.handle(erro));
    }
}


