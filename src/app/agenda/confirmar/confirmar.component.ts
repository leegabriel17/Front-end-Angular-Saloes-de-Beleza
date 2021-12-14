import { MarcarService } from './../marcar.service';
import { Component, OnInit } from '@angular/core';
import { Horario } from '../agenda';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  private hora: string;
  private data: string;
  private servico: string;

  private horario: Horario = new Horario();

  constructor(
    private marcarService: MarcarService
  ) { }

  ngOnInit() {
    this.hora = this.marcarService.hora;
    this.data = this.marcarService.dia;
    this.servico = this.marcarService.servico;
  }

}
