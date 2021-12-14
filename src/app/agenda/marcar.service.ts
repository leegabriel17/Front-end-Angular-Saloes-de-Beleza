import { Injectable } from '@angular/core';
import { Horario } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class MarcarService {

  hora: string = '';
  dia: string = '';
  servico: string = '';

  verificar(horario: Horario){
    this.hora = horario.hora;
    this.dia = horario.data;
    this.servico = horario.servico;
  }

  constructor() { }
}
