import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-degree-form',
  template: `
    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <input  matInput placeholder="Degree name"
                formControlName="name">
          <mat-error *ngIf="form.controls['name'].errors">
            Degree name is required!
          </mat-error>
      </mat-form-field>

      <mat-form-field class="form-field">
        <textarea  matInput placeholder="Degree description"
                formControlName="description"></textarea>
        <mat-error *ngIf="form.controls['description'].errors">
          Degree description is required!
        </mat-error>

      </mat-form-field>

      <button class="btn" type="button" mat-raised-button (click)="emitData()">
        Save
      </button>
    </form>

  `,
  styleUrls: ['./degree-form.component.scss']
})
export class DegreeFormComponent implements OnInit {
  @Input() degree?: Degree = {} as Degree;
  @Output() save = new EventEmitter<Degree>();
  @Output() add = new EventEmitter<Degree>();

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  emitData() {
    if (this.degree.id && this.form.valid) {
      this.save.emit(this.form.value);
    } else if (!this.degree.id && this.form.valid) {
      this.add.emit(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
