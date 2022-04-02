import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3003/users'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Obtem todos os Users
  getUsers(): Observable<Users[]> {

    return this.httpClient.get<Users[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um User pelo email
  getUserById(email: String): Observable<Users> {
    return this.httpClient.get<Users>(this.url + '/' + email)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um User
  saveUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um User
  updateUser(user: Users): Observable<Users> {
    return this.httpClient.put<Users>(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um User
  deleteUser(user: Users) {
    return this.httpClient.delete<Users>(this.url + '/' + user.id, this.httpOptions)
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