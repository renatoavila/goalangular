import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-user',
  templateUrl: './goal-user.component.html',
  styleUrls: ['./goal-user.component.css']
})
export class GoalUserComponent implements OnInit {

  user = {} as Users;
  users: Users[] = [];

  constructor(private usersService: UsersService) {}
  
  ngOnInit() {
    this.getUsers();
  }

  // defini se um user será criado ou atualizado
  saveUser(form: NgForm) {
    if (this.user.id !== undefined) {
      this.usersService.updateUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.usersService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os users
  getUsers() {
    this.usersService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }

  // deleta um user
  deleteUser(user: Users) {
    this.usersService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  // copia o user para ser editado.
  editUser(user: Users) {
    this.user = { ...user };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsers();
    form.resetForm();
    this.user = {} as Users;
  }

}
