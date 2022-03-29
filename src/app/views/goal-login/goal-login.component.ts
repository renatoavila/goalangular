import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-goal-login',
  templateUrl: './goal-login.component.html',
  styleUrls: ['./goal-login.component.css']
})

export class GoalLoginComponent implements OnInit {

  /*
  profileForm = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });
  
  */
  usuario = new FormControl('');
  senha =new FormControl('');

  entrar() {
    window.alert('Entrar');
  }

  esqueci() {
    window.alert('Esqueci');
  }

  criar() {
    window.alert('Criar');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
