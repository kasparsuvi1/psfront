import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-advert',
  template: `

  <div class="wrapper">
    <form [formGroup]="form" class="form">

      <div class="form__row">
        <div class="time-wrapper">
          <span class="time-label">
              Choose a preferred time
          </span>
          <timepicker color="primary" [(userTime)]="startTime" (userTimeChange)="startTimeChange($event)"></timepicker>
          <span class="muted time">{{startTime | hourMin}} - </span>

          <timepicker color="primary" [(userTime)]="endTime" (userTimeChange)="endTimeChange($event)"></timepicker>
          <span class="muted time">{{endTime | hourMin}}</span>
        </div>

        <mat-form-field class="ml1">
          <input  matInput
                  [matDatepicker]="date"
                  [min]="minDate"
                  placeholder="Choose a date"
                  formControlName="date"
                  (dateChange)="dateChange($event)">
          <mat-datepicker-toggle matSuffix [for]="date"></mat-datepicker-toggle>
          <mat-datepicker #date></mat-datepicker>
        </mat-form-field>
      </div>

      <div class="form__row">
        <!-- Hotel -->
        <mat-form-field>
          <mat-select placeholder="Hotel" formControlName="hotels" (selectionChange)="hotelChange($event)">
            <mat-option *ngFor="let hotel of hotels" [value]="[{id: hotel.id}]">
              {{ hotel.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <!-- Resto -->
        <mat-form-field>
          <mat-select placeholder="Restaurant" formControlName="restos">
            <mat-option *ngFor="let resto of restos" [value]="[{id: resto.id}]">
              {{ resto.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <!-- Type -->
        <mat-form-field>
          <mat-select placeholder="Meal type" formControlName="mealType">
            <mat-option *ngFor="let type of types" [value]="type.value">
              {{ type.text }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <mat-form-field>
        <textarea matInput placeholder="Insert your advert message" formControlName="invitationText"></textarea>
      </mat-form-field>

      <button class="btn" color="primary" type="button" mat-raised-button (click)="emitData()">
        Add
      </button>

    </form>
  </div>
  `,
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() hotels: Hotel[] = [{} as Hotel];
  @Input() restos: Resto[] = [{} as Resto];
  @Output() add = new EventEmitter<Advert>();
  @Output() ChangeRestoFilter = new EventEmitter<number>();

  // TODO: BUG IF TIME IS OVER 23:00, it will give time 25..
  startTime = {hour: new Date().getHours() + 1, minute: 0, format: 24};
  endTime = {hour: new Date().getHours() + 2, minute: 0, format: 24};
  date = new Date();
  minDate = new Date();
  types = [{value: 'BREAKFAST', text: 'Breakfast'}, {value: 'LUNCH', text: 'Lunch'}, {value: 'DINNER', text: 'Dinner'}];
  preferredStart;
  preferredEnd;

  form = this.fb.group({
    invitationText: ['', [Validators.compose([Validators.required, Validators.maxLength(140)])]],
    hotels: ['', [Validators.required]],
    restos: [{value: '', disabled: true}],
    mealType: [''],
    preferredEnd: ['', [Validators.required]],
    preferredStart: ['', [Validators.required]],
    date: [new Date(), [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.preferredEnd = this.form.get('preferredEnd');
    this.preferredStart = this.form.get('preferredStart');
    this.preferredEnd.setValue(this.setTimeDate(this.endTime, this.date));
    this.preferredStart.setValue(this.setTimeDate(this.startTime, this.date));
  }

  startTimeChange(time) {
    this.preferredStart.setValue(this.setTimeDate(time, this.date));
  }

  endTimeChange(time) {
    this.preferredEnd.setValue(this.setTimeDate(time, this.date));
  }

  dateChange(date) {
    this.preferredEnd.setValue(this.setTimeDate(this.endTime, date.value));
    this.preferredStart.setValue(this.setTimeDate(this.startTime, date.value));
  }

  emitData() {
    if (this.form.valid) {
      const payload = {...this.form.value};
      delete payload['date'];
      this.add.emit(payload);
    }
  }

  setTimeDate(time, date: Date) {
    date.setHours(time.hour);
    date.setMinutes(time.minute);
    return date.toISOString();
  }

  hotelChange(event) {
    if (event.value[0].id) {
      this.form.get('restos').enable();
    } else {
      this.form.get('restos').disable();
    }
    this.ChangeRestoFilter.emit(event.value[0].id);
  }
}
