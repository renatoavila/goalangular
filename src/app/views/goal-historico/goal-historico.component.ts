import { Component, Input, OnInit } from '@angular/core';
import { HistoricosService } from '../../services/historico.service';
import { Historico } from '../../models/historico';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-historico',
  templateUrl: './goal-historico.component.html',
  styleUrls: ['./goal-historico.component.css']
})

export class GoalHistoricoComponent implements OnInit {

  historico = {} as Historico;
  historicos: Historico[] = [];

  constructor(private historicoService: HistoricosService) {}
  
  ngOnInit() {
    this.getHistoricos();
  }

  // definie se um historico será criado ou atualizado
  saveHistorico(form: NgForm) {
    if (this.historico.id !== undefined) {
      this.historicoService.updateHistorico(this.historico).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.historicoService.saveHistorico(this.historico).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os historicos
  getHistoricos() {
    this.historicoService.getHistoricos().subscribe((historicos: Historico[]) => {
      this.historicos = historicos;
    });
  }

  // deleta um Cofre
  deleteCofre(historico: Historico) {
    this.historicoService.deleteHistorico(historico).subscribe(() => {
      this.getHistoricos();
    });
  }

  // copia o Cofre para ser editado.
  editCofre(historico: Historico) {
    this.historico = { ...historico };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getHistoricos();
    form.resetForm();
    this.historico = {} as Historico;
  }

}
