import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sg-my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/onpush" routerLinkActive="active">On Push</a>
   </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
