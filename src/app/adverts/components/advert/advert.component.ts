import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AnswerAdvertComponent} from '../answer-advert/answer-advert.component';

@Component({
  selector: 'app-advert',
  template: `
    <div class="advert">

      <div class="advert__header">
        <p class="muted">Occupation:
          <span class="info">{{advert.user.occupation?.name || '-'}} | {{advert.user.degree?.name || '-'}}</span>
        </p>
        <p class="muted">Hotel: <span class="info">{{advert.hotels[0].name}}</span></p>
        <p class="muted">Time:
          <span class="info">
            {{advert.preferredEnd | date: 'MMM d, y'}} {{advert.preferredStart | date: 'HH:mm'}}-{{advert.preferredEnd | date: 'HH:mm'}}
          </span>
        </p>
        <p class="muted">Resto: <span class="info">{{advert.restos[0]?.name || 'Lobby'}}</span></p>
        <p class="muted">Alias: <span class="info">{{advert.user?.alias || 'Anonymous'}}</span></p>
      </div>

      <div class="advert__body">
        <p>
          {{advert.advertText}}
        </p>
      </div>

      <div class="advert__actions">
        <button mat-button color="primary" [disabled]="hasAnswered" (click)="openDialog()">Answer</button>
      </div>
    </div>
  `,
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() advert: Advert;
  @Output() addResponse = new EventEmitter<Response>();
  constructor(public dialog: MatDialog) {}

  user = JSON.parse(localStorage.getItem('user'));
  hasAnswered = false;
  ngOnInit() {
    if (this.advert.responses.filter(response => response.user.id === this.user.id).length) {
      this.hasAnswered = true;
    } else {
      this.hasAnswered = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnswerAdvertComponent, {
      width: '370px',
      data: {advert: this.advert}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && !this.hasAnswered) {
        this.addResponse.emit(result);
      }
    });
  }
}
