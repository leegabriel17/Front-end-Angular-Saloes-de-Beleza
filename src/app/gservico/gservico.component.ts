import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../ggservico/gservico.model';
import { ServicoService } from '../ggservico/servico.service';


@Component({
  selector: 'app-gservico',
  templateUrl: './gservico.component.html',
  styleUrls: ['./gservico.component.css']
})
export class GservicoComponent implements OnInit {

  request: RequestCreate = {
    id: 0,
    descricao: '',
    valor: 0
  }

  response: boolean = false;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    
  }
  
  salvar(){
    this.servico.createServico(this.request)
    .subscribe(res => {
      this.response = true;
      alert("Criado com sucesso!");
    })
  }

    /*updateList(id: number, property: string, event: any) {
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
