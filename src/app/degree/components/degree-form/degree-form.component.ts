import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-degree-form',
  template: `
    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <input  matInput placeholder="Degree name"
                formControlName="name">
      </mat-form-field>

      <mat-form-field class="form-field">
        <input  matInput placeholder="Degree description"
                formControlName="description">
      </mat-form-field>

      <button class="btn" type="button" mat-raised-button (click)="emitData()">
        Save
      </button>
    </form>

  `,
  styleUrls: ['./degree-form.component.scss']
})
export class DegreeFormComponent implements OnInit {
  @Input() occupation?: Degree = {} as Degree;
  @Output() save = new EventEmitter<Degree>();
  @Output() add = new EventEmitter<Degree>();

  form = this.fb.group({
    name: '',
    description: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  emitData() {
    console.log(this.form.value);
  }
}
