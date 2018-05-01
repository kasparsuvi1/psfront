import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <div class="card">
      <form [formGroup]="form" class="admin-form centered">
        <mat-form-field class="form-field">
          <input  matInput
                  placeholder="Alias"
                  formControlName="alias">
          <mat-error *ngIf="form.controls['alias'].errors">
            alias is required!
          </mat-error>
        </mat-form-field>
        <mat-form-field class="form-field">
          <mat-select placeholder="Occupation" formControlName="occupation">
            <mat-option *ngFor="let occupation of occupations" [value]="occupation">
              {{ occupation.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field class="form-field">
          <mat-select placeholder="degree" formControlName="degree">
            <mat-option *ngFor="let degree of degrees" [value]="degree">
              {{ degree.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="form-field">
          <mat-select placeholder="Age" formControlName="age">
            <mat-option value="">
              Rather not say
            </mat-option>
            <mat-option value="18-">
              18-
            </mat-option>
            <mat-option value="20-35">
              20-35
            </mat-option>
            <mat-option value="35-50">
              35-50
            </mat-option>
            <mat-option value="50+">
              50+
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field class="form-field">
          <mat-select placeholder="Gender" formControlName="gender">
            <mat-option value="">
              Rather not say
            </mat-option>
            <mat-option value="FEMALE">
              Female
            </mat-option>
            <mat-option value="MALE">
              Male
            </mat-option>
          </mat-select>
        </mat-form-field>

        <button class="btn save" color="primary" type="button" mat-raised-button (click)="emitData()">
          Save
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  @Input() user?: User = {} as User;
  @Input() occupations?: Occupation[];
  @Input() degrees?: Degree[];
  @Output() save = new EventEmitter<User>();
  @Output() delete = new EventEmitter<any>();

  form;

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    this.form = this.fb.group({
      alias: [this.user.alias, [Validators.required]],
      gender: [this.user.gender, [Validators.required]],
      age: [this.user.age],
      occupation: [this.user.occupation],
      degree: [this.user.degree]
    });
  }
  emitData() {
    if (this.user.id && this.form.valid) {
      this.save.emit({...this.user, ...this.form.value});
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  deleteUser() {
    this.delete.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
