import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-occupation-form',
  template: `
    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <input  matInput
                placeholder="Occupation name"
                formControlName="name">
        <mat-error *ngIf="form.controls['name'].errors">
          Occupation name is required!
        </mat-error>
      </mat-form-field>

      <mat-form-field class="form-field">
        <textarea matInput
                  placeholder="Occupation description"
                  formControlName="description">
        </textarea>
        <mat-error *ngIf="form.controls['description'].errors">
          Occupation description is required!
        </mat-error>
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
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  emitData() {
    if (this.occupation.id && this.form.valid) {
      this.save.emit(this.form.value);
    } else if (!this.occupation.id && this.form.valid) {
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
