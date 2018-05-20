import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VALID} from '@angular/forms/src/model';

@Component({
  selector: 'app-resto-form',
  template: `

  <div class="card">
    <div class="card__title">
      <h2 class="mat-title">{{resto && resto.id ? 'Edit' : 'Add new'}} resto</h2>
    </div>
    <div class="card__content">

      <form [formGroup]="form" class="admin-form">

        <mat-form-field class="form-field">
          <input  matInput placeholder="Restaurant name"
                  formControlName="name">
          <mat-error *ngIf="form.controls['name'].errors">
            Restaurant name is required!
          </mat-error>

        </mat-form-field>

        <mat-form-field class="form-field">
          <input  matInput placeholder="Resto webpage"
                  formControlName="webpage">
        </mat-form-field>

        <mat-form-field class="form-field">
          <input  matInput placeholder="Address"
                  ngx-google-places-autocomplete
                  formControlName="address"
                  (onAddressChange)="adressChange($event)">
          <mat-error *ngIf="form.controls['address'].errors">
            Resto address is required!
          </mat-error>

        </mat-form-field>

        <mat-form-field class="form-field">
          <mat-select placeholder="Hotel" [(ngModel)]="hotelId" [ngModelOptions]="{standalone: true}">
            <mat-option value="">None</mat-option>
            <mat-option *ngFor="let hotel of hotels" [value]="hotel.id">{{hotel.name}}</mat-option>
          </mat-select>
        </mat-form-field>

        <button class="btn" type="button" mat-raised-button (click)="emitData()">
          Save
        </button>
        <button class="btn admin-form__delete"
                *ngIf="resto && resto.id"
                color="warn"
                type="button"
                mat-raised-button
                (click)="deleteResto()">
          Delete
        </button>
      </form>
    </div>
  </div>
  `,
  styleUrls: ['./resto-form.component.scss']
})
export class RestoFormComponent implements OnInit {
  @Input() resto?: Resto = {} as Resto;
  @Input() hotels: Hotel[] = [{} as Hotel];
  @Output() save = new EventEmitter<Resto>();
  @Output() add = new EventEmitter<Resto>();
  @Output() delete = new EventEmitter<any>();

  hotelId: number;

  optionsForCities = {types: ['(cities)']};
  optionsForCountry = {types: ['(regions)']};

  form = this.fb.group({
    name: ['', Validators.required],
    webpage: [''],
    country: [''],
    city: [''],
    address: ['', Validators.required],
    zipCode: [''],
    state: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.resto && this.resto.hotel && this.resto.hotel.id) {
      this.hotelId = this.resto.hotel.id;
    }

    if (this.resto && this.resto.id) {
      this.form = this.fb.group({
        name: [this.resto.name, Validators.required],
        webpage: [this.resto.webpage],
        country: [this.resto.country],
        city: [this.resto.city],
        address: [this.resto.address, Validators.required],
        zipCode: [this.resto.zipCode],
        state: [this.resto.state]
      });
    }
  }

  emitData() {
    if (this.form.valid && this.resto.id) {
      this.save.emit({...this.resto, ...this.form.value, hotel: {id: this.hotelId}});
    } else if (this.form.valid && !this.resto.id) {
      this.add.emit({...this.form.value, hotel: {id: this.hotelId}});
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  deleteResto() {
    this.delete.emit();
  }

  countryChange(event) {
    this.form.get('country').setValue(event.name);
  }

  cityChange(event) {
    this.form.get('city').setValue(event.vicinity);
  }

  adressChange(event) {
    this.form.get('address').setValue(event.formatted_address);
    const zipCode = event.address_components.filter(component => component.types.includes('postal_code'));
    const city = event.address_components.filter(component => component.types.includes('locality'));
    const country = event.address_components.filter(component => component.types.includes('country'));
    if (zipCode[0]) {
      this.form.get('zipCode').setValue(zipCode[0].long_name);
    }
    if (city[0]) {
      this.form.get('city').setValue(city[0].long_name);
    }
    if (country[0]) {
      this.form.get('country').setValue(country[0].long_name);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
