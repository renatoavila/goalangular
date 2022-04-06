import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cofre } from '../models/cofres';

@Injectable({
  providedIn: 'root'
})
export class CofresService {

  url = 'http://144.22.210.64:3000/cofres'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Obtem todos os cofres
  getCofres(): Observable<Cofre[]> {

    return this.httpClient.get<Cofre[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um Cofre pelo id
  getCofreById(id: number): Observable<Cofre> {
    return this.httpClient.get<Cofre>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um Cofre
  saveCofre(cofre: Cofre): Observable<Cofre> {
    return this.httpClient.post<Cofre>(this.url, JSON.stringify(cofre), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um Cofre
  updateCofre(cofre: Cofre): Observable<Cofre> {
    return this.httpClient.put<Cofre>(this.url + '/' + cofre.idCofre, JSON.stringify(cofre), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Cofre
  deleteCofre(cofre: Cofre) {
    return this.httpClient.delete<Cofre>(this.url + '/' + cofre.idCofre, this.httpOptions)
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
