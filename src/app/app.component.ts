import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GoalLoginComponent } from './views/goal-login/goal-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goalUI';
}
