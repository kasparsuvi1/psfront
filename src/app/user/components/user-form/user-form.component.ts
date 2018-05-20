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
            <mat-option *ngFor="let occupation of occupations" [value]="occupation.id">
              {{ occupation.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field class="form-field">
          <mat-select placeholder="Degree" formControlName="degree">
            <mat-option *ngFor="let degree of degrees" [value]="degree.id">
              {{ degree.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="form-field">
          <mat-select placeholder="Age" formControlName="age">
            <mat-option value="YOUNG">
              18-30
            </mat-option>
            <mat-option value="ADULT">
              31-50
            </mat-option>
            <mat-option value="SENIOR">
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

        <p><a routerLink="/user/password-change">Change password!</a></p>

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
      gender: [this.user.gender],
      age: [this.user.age],
      occupation: [this.user.occupation ? this.user.occupation.id : null],
      degree: [this.user.degree ? this.user.degree.id : null]
    });
  }
  emitData() {
    if (this.user.id && this.form.valid) {
      let value = this.form.value;
      value = value.occupation ? {...this.user, ...value, occupation: {id: value.occupation}} : {...this.user, ...value};
      value = value.degree ? {...this.user, ...value, occupation: {id: value.degree}} : {...this.user, ...value};
      this.save.emit(value);
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
