import {Component, OnInit, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {State, AcceptResponse} from '../../../core/store';

@Component({
  selector: 'app-adverts',
  template: `
  <h3>Adverts you have added:</h3>
  <mat-accordion class="example-headers-align">
    <mat-expansion-panel *ngFor="let advert of adverts" hideToggle="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{advert.hotels[0].name}} | {{advert.preferredEnd | date: 'MMM d'}}
        </mat-panel-title>
        <mat-panel-description>
          <div *ngIf="advert.advertStatus === 'ACCEPTED'">{{advert.advertStatus | stateTranslater: 'ADVERT' }}</div>
          <div *ngIf="advert.advertStatus !== 'ACCEPTED'" class="counter" [matTooltip]="advert.advertText">{{advert.responses.length}}</div>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <ng-container *ngFor="let response of advert.responses">
        <div class="response" *ngIf="response.responseStatus !== 'DECLINED'">
          <div class="response__body">
            <h3 class="mat-subheading-1">
              {{response.user.alias || 'Anonymous'}} | <span class="muted">{{response.user.occupation?.name || 'No occupation'}}</span>
            </h3>
            <p class="mat-body-1">{{response.responseText}}</p>
          </div>
          <div class="response__footer">
            <div class="response__info">
              <p class="accepted-time muted"><mat-icon>access_time</mat-icon>{{response.proposedTime | date: 'HH:mm'}}</p>
            </div>
            <div class="response__actions" *ngIf="response.responseStatus !== 'ACCEPTED'">
              <button mat-button color="accent">Decline</button>
              <button mat-button color="primary" (click)="acceptResponse(advert.id, response.id)">Accept</button>
            </div>
          </div>
        </div>
      </ng-container>

      <ng-container *ngIf="!advert.responses.length">
        <p class="muted">There is none responses yet!</p>
      </ng-container>

    </mat-expansion-panel>
  </mat-accordion>
  <p class="muted" *ngIf="!adverts.length">
    You don't have any advert yet!
  </p>

  `,
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  @Input() adverts: Advert[];

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  acceptResponse(advertId, responseId) {
    this.store.dispatch(new AcceptResponse({advertId, responseId}));
  }
}
