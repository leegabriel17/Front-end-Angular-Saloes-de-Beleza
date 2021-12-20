import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaList, RequestCreateAgenda, ResponseCreateAgenda } from './agenda.module';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = "http://localhost:8080/agendamentos"

  constructor(private http: HttpClient) { }

  getAgendamentos(): Observable<AgendaList>{
    return this.http.get<AgendaList>(this.url);
  }

  createAgendamento(request: RequestCreateAgenda): Observable<ResponseCreateAgenda>{
    return this.http.post<ResponseCreateAgenda>(this.url, request);
  }

}
