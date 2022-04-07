import { Login } from './../../models/login';

import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-goal-login',
  templateUrl: './goal-login.component.html',
  styleUrls: ['./goal-login.component.css']
})

export class GoalLoginComponent implements OnInit {

  login = {} as Login;


  usuarioForm = new FormGroup({
    user: new FormControl(''),
    senha: new FormControl(''),
  });


  constructor(
    private loginService: LoginService,
    private router:Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.login.email = this.usuarioForm.controls['user'].value
    this.login.senha = this.usuarioForm.controls['senha'].value

    this.loginService.postLogin(this.login).subscribe((retorno : Boolean) => {
      if (retorno){
        //this.router.navigateByUrl('/cofres');
        this.router.navigate(['./cofres'], { relativeTo: this.route, state: { user: JSON.stringify(this.login.email) } });
      }else{
        window.alert('Falha no login!');
      }
    });
    this.usuarioForm.reset();
  }

}


