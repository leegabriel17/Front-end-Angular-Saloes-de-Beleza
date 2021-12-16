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
    
  ) { }

  ngOnInit() {
    
  }

}
