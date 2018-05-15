import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-answer-advert',
  template: `

  <form [formGroup]="form" class="form">
    <mat-form-field class="form-field">
      <textarea matInput formControlName="responseText" placeholder="Add response text..."></textarea>
    </mat-form-field>
  </form>

  <div class="time-wrapper">
    <span class="time-label">
        Select starting time between {{data.advert.preferredStart | date: 'HH:mm'}} - {{data.advert.preferredEnd | date: 'HH:mm'}}
    </span>
    <timepicker color="primary" [(userTime)]="proposedTime" (userTimeChange)="proposedTimeChange($event)"></timepicker>
    <span>{{proposedTime | hourMin}}</span>
  </div>

  <div class="actions">
    <button mat-button color="primary" (click)="closeDialog()">Close</button>
    <button mat-raised-button color="primary" (click)="submitResponse()">Send response</button>
  </div>

  `,
  styleUrls: ['./answer-advert.component.scss']
})
export class AnswerAdvertComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AnswerAdvertComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  proposedTime = {
    hour: new Date(this.data.advert.preferredStart).getHours(),
    minute: new Date(this.data.advert.preferredStart).getMinutes(),
    format: 24
  };

  form = this.fb.group({
    responseText: ['', [Validators.compose([Validators.required, Validators.maxLength(140)])]]
  });

  ngOnInit() {}

  proposedTimeChange(event) {}

  submitResponse() {
    if (this.form.valid && this.proposedTimedValid(this.proposedTime, this.data.advert.preferredStart, this.data.advert.preferredEnd)) {
      const proposedTime = new Date(this.data.advert.preferredStart);
      proposedTime.setHours(this.proposedTime.hour);
      proposedTime.setMinutes(this.proposedTime.minute);

      const payload = {...this.form.value, proposedTime, advert: this.data.advert};
      this.dialogRef.close(payload);
    } else {
      this.form.markAsTouched();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  proposedTimedValid(proposedTime, startTime, endTime) {
    startTime = new Date(startTime);
    endTime = new Date(endTime);
    const time = new Date(startTime);
    time.setHours(proposedTime.hour);
    time.setMinutes(proposedTime.minute);
    if (time >= startTime && time <= endTime) {
      return true;
    } else {
      return false;
    }
  }
}
