import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {metas} from './metas'

@Component({
  selector: 'app-goal-cofres',
  templateUrl: './goal-cofres.component.html',
  styleUrls: ['./goal-cofres.component.css']
})
export class GoalCofresComponent implements OnInit {
  goal=metas;

  @Input() usuario: any;

  constructor() { }

  ngOnInit(): void {
  }

}