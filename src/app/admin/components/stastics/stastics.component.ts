import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stastics',
  template: `
    <section class="container about">
      <h2 class="container__header"><span>HEY ADMIN!</span></h2>
      <p class="content">Today we have {{users.length}} registered users!</p>
    </section>
  `,
  styleUrls: ['./stastics.component.scss']
})
export class StasticsComponent implements OnInit {
  @Input() users?: User[];

  constructor() {}

  ngOnInit() {}
}
