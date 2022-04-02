import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GoalCofresComponent } from './views/goal-cofres/goal-cofres.component';
import { GoalUserComponent } from './views/goal-user/goal-user.component';
import { GoalLoginComponent } from './views/goal-login/goal-login.component';
import { GoalHistoricoComponent } from './views/goal-historico/goal-historico.component';



@NgModule({
  declarations: [
    AppComponent,
    GoalCofresComponent,
    GoalUserComponent,
    GoalLoginComponent,
    GoalHistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GoalLoginComponent },
      { path: 'cofres', component: GoalCofresComponent },
      { path: 'user', component: GoalUserComponent }
    ])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
