import { Component, Input, OnInit } from '@angular/core';
import { CofresService } from '../../services/cofres.service';
import { Cofre } from '../../models/cofres';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-cofres',
  templateUrl: './goal-cofres.component.html',
  styleUrls: ['./goal-cofres.component.css']
})
export class GoalCofresComponent implements OnInit {
  
  cofre = {} as Cofre;
  cofres: Cofre[] = [];

  constructor(private cofreService: CofresService) {}
  
  ngOnInit() {
    this.getCofres();
  }

  // defini se um Cofre será criado ou atualizado
  saveCofre(form: NgForm) {
    if (this.cofre.idCofre !== undefined) {
      this.cofreService.updateCofre(this.cofre).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.cofreService.saveCofre(this.cofre).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os Cofres
  getCofres() {
    this.cofreService.getCofres().subscribe((cofres: Cofre[]) => {
      this.cofres = cofres;
    });
  }

  // deleta um Cofre
  deleteCofre(cofre: Cofre) {
    this.cofreService.deleteCofre(cofre).subscribe(() => {
      this.getCofres();
    });
  }

  // copia o Cofre para ser editado.
  editCofre(cofre: Cofre) {
    this.cofre = { ...cofre };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCofres();
    form.resetForm();
    this.cofre = {} as Cofre;
  }

}