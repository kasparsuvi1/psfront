import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-occupation-form',
  template: `
    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <input  matInput placeholder="Occupation name"
                formControlName="name">
      </mat-form-field>

      <mat-form-field class="form-field">
        <input  matInput placeholder="Occupation description"
                formControlName="description">
      </mat-form-field>

      <button class="btn" type="button" mat-raised-button (click)="emitData()">
        Save
      </button>
    </form>

  `,
  styleUrls: ['./occupation-form.component.scss']
})
export class OccupationFormComponent implements OnInit {
  @Input() occupation?: Occupation = {} as Occupation;
  @Output() save = new EventEmitter<Occupation>();
  @Output() add = new EventEmitter<Occupation>();

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
