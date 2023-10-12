import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { EtatComponent } from './etat/etat.component';
import { Etat2Component } from './etat2/etat2.component';
import { ConfigComponent } from './config/config.component';
import { SuiviComponent } from './suivi/suivi.component';
import { HistoriqueComponent } from './historique/historique.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './card/card.component';
import { PersonaliseComponent } from './personalise/personalise.component';
import { ReccurenceComponent } from './reccurence/reccurence.component';
import { MeetingComponent } from './meeting/meeting.component';
import { CardListComponent } from './card-list/card-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TableauBordComponent,
    EtatComponent,
    Etat2Component,
    ConfigComponent,
    SuiviComponent,
    HistoriqueComponent,
    TestComponent,
    CardComponent,
    PersonaliseComponent,
    ReccurenceComponent,
    MeetingComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
