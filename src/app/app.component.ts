import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-fixacao';

  isPage: boolean = false;

  constructor(
    private router: Router,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = "bootstrap";
    this.toastyConfig.showClose = false;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isPage = event.url === '/login' || event.url === '/cadastro'; 
    });
  }
}
