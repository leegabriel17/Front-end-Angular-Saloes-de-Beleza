
import { getLocaleDateTimeFormat } from '@angular/common';
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

  request: RequestCreateAgenda = {
    idAgendamento: 0,    
    dataAgendada:'',
    servicoId: 0,
    clienteId: 0,
    funcionarioId: 0
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
