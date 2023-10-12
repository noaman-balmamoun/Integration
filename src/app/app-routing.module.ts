import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { EtatComponent } from './etat/etat.component';
import { Etat2Component } from './etat2/etat2.component';
import { ConfigComponent } from './config/config.component';
import { SuiviComponent } from './suivi/suivi.component';
import { HistoriqueComponent } from './historique/historique.component';
import { TestComponent } from './test/test.component';
import { PersonaliseComponent } from './personalise/personalise.component';
import { MeetingComponent } from './meeting/meeting.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  {  path :'Dashboard',component:TableauBordComponent},
  {  path :'Search',component:EtatComponent},
  {  path :'State',component:Etat2Component},
  {  path :'Configuration',component:ConfigComponent},
  {path:'Follow',component:SuiviComponent},
  {path:'Meeting',component:HistoriqueComponent},
  {path:'test',component:TestComponent},
  { path: '', component: LoginComponent },
  {path:'Personalise',component:PersonaliseComponent},
  {path:'Upcoming',component:MeetingComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
