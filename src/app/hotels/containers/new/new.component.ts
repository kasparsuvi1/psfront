import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Add new Hotel</h2>
      </div>
      <div class="card__content">
        <app-hotels-form>
        </app-hotels-form>
      </div>
    </div>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
