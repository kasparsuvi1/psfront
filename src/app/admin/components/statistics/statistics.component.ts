import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-statistics',
  template: `
    <section class="container about">
      <h2 class="container__header"><span>HEY ADMIN!</span></h2>
      <p class="content">Today we have {{users.length}} registered users!</p>
    </section>
  `,
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() users?: User[];

  constructor() {}

  ngOnInit() {}
}
