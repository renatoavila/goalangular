import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Historico } from '../models/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricosService {

  url = 'http://144.22.210.64:3009/historico'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Obtem todas as Historicos
  getHistoricos(): Observable<Historico[]> {

    return this.httpClient.get<Historico[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem uma Historico pelo id
  getHistoricoById(id: number): Observable<Historico> {
    return this.httpClient.get<Historico>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva uma Historico
  saveHistorico(historico: Historico): Observable<Historico> {
    return this.httpClient.post<Historico>(this.url, JSON.stringify(historico), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza uma Historico
  updateHistorico(historico: Historico): Observable<Historico> {
    return this.httpClient.put<Historico>(this.url + '/' + historico.id, JSON.stringify(historico), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Historico
  deleteHistorico(historico: Historico) {
    return this.httpClient.delete<Historico>(this.url + '/' + historico.id, this.httpOptions)
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
