import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar>
      <div class="app-wrapper">
        <router-outlet></router-outlet>
      </div>
    </app-navbar>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
