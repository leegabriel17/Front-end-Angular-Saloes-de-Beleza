import { Funcionario } from './../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionariosUrl = 'http://localhost:8090/funcionarios';

  constructor(private http: HttpClient) { }


  listarTodas(): Promise<any> {
    return this.http.get(`${this.funcionariosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.funcionariosUrl}/remover/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get<Funcionario>(`${this.funcionariosUrl}/buscar/${codigo}`)
      .toPromise()
      .then(response => {
        const funcionario = response;

        return funcionario;
      });
  }

  adicionar(funcionario: Funcionario): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<Funcionario>(`${this.funcionariosUrl}/adicionar`, Funcionario.toJson(funcionario), { headers })
      .toPromise();
  }
}
