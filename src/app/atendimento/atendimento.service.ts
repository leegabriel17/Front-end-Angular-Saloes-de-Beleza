import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  antendimentosUrl = 'http://localhost:8080/atendimentos';

  constructor(private http: HttpClient) { }

  adicionar(atendimento: Atendimento): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<Atendimento>(`${this.antendimentosUrl}/adicionar`, Atendimento.toJson(atendimento), { headers })
      .toPromise();
  }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.antendimentosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.antendimentosUrl}/remover/${codigo}`)
      .toPromise()
      .then(() => null);
  }
}
