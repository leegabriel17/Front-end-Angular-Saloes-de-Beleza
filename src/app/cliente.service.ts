import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cliente } from './model';

export class ClienteFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({providedIn: 'root'})
export class ClienteService {

  clientesUrl = 'http://localhost:8080/cliente';

  constructor(private http: Http) { }


  listarTodas(): Promise<any> {
    const headers = new Headers();

    return this.http.get(this.clientesUrl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {
    const headers = new Headers();

    return this.http.delete(`${this.clientesUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.clientesUrl}/ativar/${id}`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.clientesUrl, JSON.stringify(cliente), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.clientesUrl}/${cliente.codigo}`,
        JSON.stringify(cliente), { headers })
      .toPromise()
      .then(response => response.json() as Cliente);
  }

  buscarPorCodigo(codigo: number): Promise<Cliente> {
    const headers = new Headers();

    return this.http.get(`${this.clientesUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => response.json() as Cliente);
  }

  pesquisar(filtro: ClienteFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.clientesUrl}`, { headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const clientes = responseJson.content;

        const resultado = {
          clientes,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }

}
