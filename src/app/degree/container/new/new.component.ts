import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">Add new degree</h2>
      </div>
      <div class="card__content">
        <app-degree-form>
        </app-degree-form>
      </div>
    </div>
  `,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
