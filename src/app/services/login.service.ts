import { Injectable } from '@angular/core';
import { json } from 'express';
import { UsersService } from './users.service';

@Injectable({
    providedIn: 'root'
  })

export class LoginService {

  validaLogin(usuario: String) {

    //user=this.usu.getUserById(usuario)
    
    //window.alert('LoginService -> user : ' +  usuario );
    return true;

  }

  constructor(private usu: UsersService) { 
    
  }

}
