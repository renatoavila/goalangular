import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal-login',
  templateUrl: './goal-login.component.html',
  styleUrls: ['./goal-login.component.css']
})

export class GoalLoginComponent implements OnInit {

  
  usuarioForm = new FormGroup({
    user: new FormControl(''),
    senha: new FormControl(''),
  });
  

  entrar() {
    window.alert('Entrar: ' + this.usuarioForm.value );
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


