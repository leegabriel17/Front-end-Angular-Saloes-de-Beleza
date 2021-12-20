import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaList, AgendaModelo } from './agenda.module';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = "http://localhost:8090/agendamentos"

  constructor(private http: HttpClient) { }

  getAgendamentos(): Observable<AgendaList>{
    return this.http.get<AgendaList>(this.url);
  }

  createAgendamento(): void{}

}
