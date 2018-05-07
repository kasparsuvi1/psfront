import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-responses',
  template: `
    <p>
      reponses works!
    </p>
  `,
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  @Input() responses: Response[];

  constructor() {}

  ngOnInit() {}
}
