import { Component } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  meetings = [
    { date: '03/08/2002', objective: 'Suivi mensuel' },
    { date: '03/09/2002', objective: 'Planning discussion' },
    { date: '03/08/2002', objective: 'Suivi mensuel' },{ date: '03/08/2002', objective: 'Suivi mensuel' },
    { date: '03/08/2002', objective: 'Suivi mensuel' },
    { date: '03/09/2002', objective: 'Planning discussion' },
    { date: '03/08/2002', objective: 'Suivi mensuel' },{ date: '03/08/2002', objective: 'Suivi mensuel' },
    // Add more meeting objects as needed { date: '03/08/2002', objective: 'Suivi mensuel' },
    
    // Add more meeting objects as needed
    // Add more meeting objects as needed
  ];
  asideMeeting = { date: '03/10/2002', objective: 'Another meeting' };

}
