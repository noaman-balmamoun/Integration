import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntegCollab';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setBodyBackgroundColor();
      }
    });
  }

  private setBodyBackgroundColor() {
    const isLoginPage = this.router.url === '/login' || this.router.url === '/';
    document.body.style.backgroundColor = isLoginPage ? '#32607C' : 'white';
  }
}

