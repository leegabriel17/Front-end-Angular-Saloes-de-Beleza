import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ServicoList, ServicoModel } from './gservico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url = "http://localhost:8080/servicos"

  constructor(private http: HttpClient) { }

  getServicos(): Observable<ServicoList> {
    return this.http.get<ServicoList>(this.url);
  }

  createServico(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

}
