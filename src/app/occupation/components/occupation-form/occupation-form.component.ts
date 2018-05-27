import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-occupation-form',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">{{occupation && occupation.id ? 'Edit' : 'Add new'}} occupation</h2>
      </div>
      <div class="card__content">

        <form [formGroup]="form" class="admin-form">

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

          <div class="admin-form__actions">
            <button class="btn"
                    *ngIf="occupation && occupation.id"
                    color="warn"
                    type="button"
                    mat-raised-button
                    (click)="deleteOccupation()">
              Delete
            </button>

            <button class="btn" type="button" mat-raised-button (click)="emitData()">
              {{occupation && occupation.id ? 'Save occupation' : 'Add occupation'}}
            </button>
          </div>
        </form>
      </div>
    </div>


  `,
  styleUrls: ['./occupation-form.component.scss']
})
export class OccupationFormComponent implements OnInit {
  @Input() occupation?: Occupation = {} as Occupation;
  @Output() save = new EventEmitter<Occupation>();
  @Output() add = new EventEmitter<Occupation>();
  @Output() delete = new EventEmitter<any>();

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.occupation && this.occupation.id) {
      this.form = this.fb.group({
        name: [this.occupation.name, [Validators.required]],
        description: [this.occupation.description, [Validators.required]]
      });
    }
  }
  emitData() {
    if (this.occupation.id && this.form.valid) {
      this.save.emit({...this.occupation, ...this.form.value});
    } else if (!this.occupation.id && this.form.valid) {
      this.add.emit(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  deleteOccupation() {
    this.delete.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
