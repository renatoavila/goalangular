import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Login } from '../models/login';


@Injectable({
    providedIn: 'root'
  })
export class LoginService {


  url = 'http://144.22.210.64:9888/api/login/'; // api rest



  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Obtem todos os cofres
  postLogin(login : Login): Observable<Boolean>{

    return this.httpClient.post<Boolean>(this.url, JSON.stringify(login), this.httpOptions)
      .pipe(
        retry(2),
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
    window.alert('Falha no login!');
    return throwError(errorMessage);
  };

}
