import { Component,Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Person } from '../models/person';



@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent  {
  @Input() displayedPeople!: Person[];

  
  

}
