import {Component} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>

  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor() {}
}
