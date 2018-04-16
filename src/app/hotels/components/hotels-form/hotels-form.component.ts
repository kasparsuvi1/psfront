import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotels-form',
  template: `
    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <label>Country</label>
        <input matInput formControlName="country">
      </mat-form-field>

      <mat-form-field class="form-field">
        <label>City</label>
        <input matInput formControlName="city">
      </mat-form-field>

      <button class="btn" type="button" mat-raised-button (click)="emitData()">
        Salvesta
      </button>
    </form>
  `,
  styleUrls: ['./hotels-form.component.scss']
})
export class HotelsFormComponent implements OnInit {
  @Input() hotel?: Hotel = {} as Hotel;
  @Output() save = new EventEmitter<Hotel>();
  @Output() add = new EventEmitter<Hotel>();

  form = this.fb.group({
    country: '',
    city: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  emitData() {
    console.log(this.form.value);
  }
}
