import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotels-form',
  template: `

    <form [formGroup]="form">

      <mat-form-field class="form-field">
        <input  matInput placeholder="Hotel name"
                formControlName="name">
      </mat-form-field>

      <mat-form-field class="form-field">
        <input  matInput placeholder="Hotel webpage"
                formControlName="webpage">
      </mat-form-field>

      <mat-form-field class="form-field">
        <input  matInput placeholder="address"
                ngx-google-places-autocomplete
                formControlName="address"
                (onAddressChange)="adressChange($event)">
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

  optionsForCities = {types: ['(cities)']};
  optionsForCountry = {types: ['(regions)']};
  form = this.fb.group({
    name: '',
    webpage: '',
    country: '',
    city: '',
    address: '',
    zipCode: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  emitData() {
    console.log(this.form.value);
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

    console.log(event);
  }
}
