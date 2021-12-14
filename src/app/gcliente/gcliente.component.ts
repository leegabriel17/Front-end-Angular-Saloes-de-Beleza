import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { ErrorHandlerService } from '../error-handler.service';
import { ClienteFiltro, ClienteService } from './../cliente.service';

@Component({
  selector: 'app-gcliente',
  templateUrl: './gcliente.component.html',
  styleUrls: ['./gcliente.component.css']
})
export class GclienteComponent implements OnInit {


  totalRegistros = 0;
  filtro = new ClienteFiltro();
  clientes = [];
  @ViewChild('tabela') grid;

  constructor(
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de clientes');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.clienteService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.clientes = resultado.clientes;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(cliente: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir ?',
      accept: () => {
        this.excluir(cliente);
      }
    });
  }

  excluir(cliente: any) {
    this.clienteService.excluir(cliente.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        //this.toasty.success('Cliente excluído com sucesso');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  alternarStatus(cliente: any): void {
    const novoStatus = !cliente.ativo;

    this.clienteService.mudarStatus(cliente.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        cliente.ativo = novoStatus;
        //this.toasty.success(`Cliente ${acao} com sucesso  !`);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  /*
  constructor() { }

  ngOnInit() {
  }

  editField: string;
    personList: Array<any> = [
      { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
      { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
      { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
      { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
      { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
      { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
      { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

    searchItems() {
    }
    */

}
