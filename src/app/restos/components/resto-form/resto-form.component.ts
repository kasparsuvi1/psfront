import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-resto-form',
  template: `
  <form [formGroup]="form">

    <mat-form-field class="form-field">
      <input  matInput placeholder="Resto name"
              formControlName="name">
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
    </mat-form-field>

    <mat-form-field class="form-field">
      <mat-select placeholder="Hotel" [(ngModel)]="hotelId" [ngModelOptions]="{standalone: true}">
        <mat-option value="">None</mat-option>
        <mat-option *ngFor="let hotel of hotels" [value]="hotel.id">{{hotel.name}}</mat-option>
      </mat-select>
    </mat-form-field>

    <button class="btn" type="button" mat-raised-button (click)="emitData()">
      Salvesta
    </button>
  </form>

  `,
  styleUrls: ['./resto-form.component.scss']
})
export class RestoFormComponent implements OnInit {
  @Input() resto?: Resto = {} as Resto;
  @Input() hotels: Hotel[] = [{} as Hotel];
  @Output() save = new EventEmitter<Resto>();
  @Output() add = new EventEmitter<Resto>();

  hotelId: number;

  optionsForCities = {types: ['(cities)']};
  optionsForCountry = {types: ['(regions)']};

  form = this.fb.group({
    name: '',
    webpage: '',
    country: '',
    city: '',
    address: '',
    zipCode: '',
    state: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.resto.hotel && this.resto.hotel.id) {
      this.hotelId = this.resto.hotel.id;
    }
  }

  emitData() {
    if (this.form.valid && this.resto.id) {
      this.save.emit({...this.form.value, hotel: {id: this.hotelId}});
    } else if (this.form.valid && !this.resto.id) {
      this.add.emit({...this.form.value, hotel: {id: this.hotelId}});
    } else {
      this.markFormGroupTouched(this.form);
    }
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
