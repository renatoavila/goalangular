import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  

import { LoginService } from 'src/app/services/login.service';
import { usuario } from './usuario';

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
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.loginService.validaLogin(JSON.stringify(this.usuarioForm.value))){
      //this.router.navigateByUrl('/cofres');

      this.router.navigate(['./cofres'], { relativeTo: this.route, state: { user: JSON.stringify(this.usuarioForm.controls['user'].value) } });

    }
  }

}


