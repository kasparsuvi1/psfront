import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-degree-form',
  template: `
    <div class="card">
      <div class="card__title">
        <h2 class="mat-title">{{degree && degree.id ? 'Edit' : 'Add new'}} degree</h2>
      </div>
      <div class="card__content">
        <form [formGroup]="form" class="admin-form">

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

          <div class="admin-form__actions">
            <button class="btn"
                    *ngIf="degree && degree.id"
                    color="warn"
                    type="button"
                    mat-raised-button
                    (click)="deleteDegree()">
              Delete
            </button>

            <button class="btn" type="button" mat-raised-button (click)="emitData()">
              {{degree && degree.id ? 'Save degree' : 'Add degree'}}
            </button>
          </div>

        </form>
      </div>
    </div>

  `,
  styleUrls: ['./degree-form.component.scss']
})
export class DegreeFormComponent implements OnInit {
  @Input() degree?: Degree = {} as Degree;
  @Output() save = new EventEmitter<Degree>();
  @Output() add = new EventEmitter<Degree>();
  @Output() delete = new EventEmitter<any>();

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.degree && this.degree.id) {
      this.form = this.fb.group({
        name: [this.degree.name, [Validators.required]],
        description: [this.degree.description, [Validators.required]]
      });
    }
  }

  emitData() {
    if (this.degree.id && this.form.valid) {
      this.save.emit({...this.degree, ...this.form.value});
    } else if (!this.degree.id && this.form.valid) {
      this.add.emit(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  deleteDegree() {
    this.delete.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
