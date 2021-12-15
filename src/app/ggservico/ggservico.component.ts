import { Component, OnInit } from '@angular/core';
import { ServicoList } from './gservico.model';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-ggservico',
  templateUrl: './ggservico.component.html',
  styleUrls: ['./ggservico.component.css']
})
export class GgservicoComponent implements OnInit {

  servicosList: ServicoList;

  constructor(private servico: ServicoService ) { }

  ngOnInit() {
    this.servico.getServicos()
    .subscribe(res => this.servicosList = res)
  }

  /*editField: string;
    personList: Array<any> = [
      { id: 1, name: 'Aurelia Vega', age: 30},
      { id: 2, name: 'Guerra Cortez', age: 45,},
      { id: 3, name: 'Guadalupe House', age: 26},
      { id: 4, name: 'Aurelia Vega', age: 30},
      { id: 5, name: 'Elisa Gallagher', age: 31},
    ];

    awaitingPersonList: Array<any> = [
     
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
    }*/


}
