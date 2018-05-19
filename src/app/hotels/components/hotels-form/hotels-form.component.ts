import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotels-form',
  template: `

  <div class="card">
    <div class="card__title">
      <h2 class="mat-title">{{hotel && hotel.id ? 'Edit' : 'Add new'}} hotel</h2>
    </div>
    <div class="card__content">

      <form [formGroup]="form" class="admin-form">

        <mat-form-field class="form-field">
          <input  matInput placeholder="Hotel name"
                  formControlName="name">
        </mat-form-field>

        <mat-form-field class="form-field">
          <input  matInput placeholder="Hotel webpage"
                  formControlName="webpage">
        </mat-form-field>

        <mat-form-field class="form-field">
          <input  matInput placeholder="Address"
                  ngx-google-places-autocomplete
                  formControlName="address"
                  (onAddressChange)="adressChange($event)">
        </mat-form-field>

        <button class="btn" type="button" mat-raised-button (click)="emitData()">
          Salvesta
        </button>

        <button class="btn admin-form__delete"
                *ngIf="hotel && hotel.id"
                color="warn"
                type="button"
                mat-raised-button
                (click)="deleteHotel()">
          Delete
        </button>
      </form>
    </div>
  </div>
  <br>
  `,
  styleUrls: ['./hotels-form.component.scss']
})
export class HotelsFormComponent implements OnInit {
  @Input() hotel?: Hotel = {} as Hotel;
  @Output() save = new EventEmitter<Hotel>();
  @Output() add = new EventEmitter<Hotel>();
  @Output() delete = new EventEmitter<any>();

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

  test;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.hotel && this.hotel.id) {
      this.form = this.fb.group({
        name: [this.hotel.name, Validators.required],
        webpage: [this.hotel.webpage],
        country: [this.hotel.country],
        city: [this.hotel.city],
        address: [this.hotel.address, Validators.required],
        zipCode: [this.hotel.zipCode],
        state: [this.hotel.state]
      });
    }
  }

  emitData() {
    if (this.form.valid && this.hotel.id) {
      console.log({...this.hotel, ...this.form.value});
      this.test = {...this.hotel, ...this.form.value};
      // this.save.emit({...this.hotel, ...this.form.value});
    } else if (this.form.valid && !this.hotel.id) {
      this.add.emit(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  deleteHotel() {
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
