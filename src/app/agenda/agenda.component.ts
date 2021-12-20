
import { Component, OnInit } from '@angular/core';
import { Cliente } from './agenda';
import { RequestCreateAgenda } from './agenda.module';
import { AgendaService } from './agenda.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  cliente: Cliente;  
  servicosArray = [1, 0, 0, 1, 0, 0];

  request: RequestCreateAgenda ={
    cliente: '',
    dataAgendada: '',
    funcionario: '',
    idAgendamento: 0,
    servicosId: this.servicosArray
  }

  constructor( private service: AgendaService){}

  ngOnInit() {       
  }

  salvar(){
    this.service.createAgendamento(this.request)
    .subscribe(res => {      
      alert("Criado com sucesso!");
    })
  }

}
