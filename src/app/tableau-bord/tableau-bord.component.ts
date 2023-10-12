import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import {CardListComponent} from '../card-list/card-list.component'
import { PersonService } from '../person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.css']
})
export class TableauBordComponent implements OnInit   {
  searchTerm: string = '';
  

  search() {
    if (this.searchTerm.trim() === '') {
      this.fetchPersons(); // Show all people when search term is empty
    } else {
      this.peopleData = this.peopleData.filter(person =>
        person.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        person.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  





  
  peopleData: Person[] = [];
  
  constructor(private personService: PersonService){

  }
  ngOnInit(): void {
    this.fetchPersons();
  }
  fetchPersons() {
    console.log('Fetching persons...');
    this.personService.getPersons().subscribe(
      (response) => {
        console.log('Received data:', response);
        this.peopleData = response;
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }





  itemsPerPage = 9;
  currentPage = 1;
  maxButtonsToShow = 5;

  get totalPages(): number {
    return Math.ceil(this.peopleData.length / this.itemsPerPage);
  }

  get displayedPeople(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.peopleData.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  get pageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = this.startPage; i <= this.endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  

 
  get startPage(): number {
    const halfMaxButtons = Math.floor(this.maxButtonsToShow / 2);
    const remainingPages = this.totalPages - this.currentPage + 1;

    return Math.max(1, this.currentPage - halfMaxButtons, this.currentPage - remainingPages + this.maxButtonsToShow - 1);
  }

  get endPage(): number {
    return Math.min(this.totalPages, this.startPage + this.maxButtonsToShow - 1);
  }
  
}
