import { Funcionario } from './model';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';


export class FuncionarioFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  funcionariosUrl = 'http://localhost:8080/funcionario';

  constructor(private http: HttpClient) { }


  /*listarTodas(): Promise<any> {
    const headers = new Headers();

    return this.http.get(this.funcionariosUrl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {
    const headers = new Headers();

    return this.http.delete(`${this.funcionariosUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.funcionariosUrl}/ativar/${id}`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.funcionariosUrl, JSON.stringify(funcionario), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.funcionariosUrl}/${funcionario.codigo}`,
        JSON.stringify(funcionario), { headers })
      .toPromise()
      .then(response => response.json() as Funcionario);
  }

  buscarPorCodigo(codigo: number): Promise<Funcionario> {
    const headers = new Headers();

    return this.http.get(`${this.funcionariosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => response.json() as Funcionario);
  }

  pesquisar(filtro: FuncionarioFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.funcionariosUrl}`, { headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const funcionarios = responseJson.content;

        const resultado = {
          funcionarios,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }*/
}
