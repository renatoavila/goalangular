import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';  

import { LoginService } from 'src/app/services/login.service';

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
  

  constructor(
    private loginService: LoginService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Logando como: ', this.usuarioForm.value);
    window.alert('Entrar: ' + JSON.stringify(this.usuarioForm.value ));
    this.router.navigateByUrl('/cofres');
  }

}


