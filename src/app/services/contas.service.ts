import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Contas } from '../models/contas';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  url = 'http://localhost:3006/contas'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Obtem todas as Contas
  getContas(): Observable<Contas[]> {

    return this.httpClient.get<Contas[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem uma Conta pelo id
  getContaById(id: number): Observable<Contas> {
    return this.httpClient.get<Contas>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva uma Conta
  saveConta(conta: Contas): Observable<Contas> {
    return this.httpClient.post<Contas>(this.url, JSON.stringify(conta), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza uma Conta
  updateConta(conta: Contas): Observable<Contas> {
    return this.httpClient.put<Contas>(this.url + '/' + conta.numConta, JSON.stringify(conta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Conta
  deleteConta(conta: Contas) {
    return this.httpClient.delete<Contas>(this.url + '/' + conta.numConta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}