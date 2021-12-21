import { Cliente } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientesUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }


  listarTodas(): Promise<any> {
    return this.http.get(`${this.clientesUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  excluir(id: number): Promise<any> {
    return this.http.delete(`${this.clientesUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorCodigo(idCliente: number): Promise<any> {
    return this.http.get<Cliente>(`${this.clientesUrl}/${idCliente}`)
      .toPromise()
      .then(response => {
        const cliente = response;

        return cliente;
      });
  }

 adicionar(cliente: Cliente): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<Cliente>(`${this.clientesUrl}`, Cliente.toJson(cliente), { headers })
      .toPromise();
  }


  atualizar(cliente: Cliente): Promise<Cliente> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

      return this.http.put<Cliente>(`${this.clientesUrl}/${cliente.idCliente}`, Cliente.toJson(cliente), { headers })
      .toPromise()
      .then(response => {
        const clienteAlterado = response;

        return clienteAlterado;
      });
  }

}
