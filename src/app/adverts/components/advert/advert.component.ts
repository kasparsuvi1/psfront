import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-advert',
  template: `
    <p>
      advert works!
    </p>
  `,
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() advert: Advert;
  constructor() {}

  ngOnInit() {}
}
