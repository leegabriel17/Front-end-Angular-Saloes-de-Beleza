import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoList } from './gservico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url = "http://localhost:8080/servicos"

  constructor(private http: HttpClient) { }

  getServicos(): Observable<ServicoList> {
    return this.http.get<ServicoList>(this.url);
  }

}
