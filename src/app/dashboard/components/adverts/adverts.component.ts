import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-adverts',
  template: `
  <h3 class="mat-title">Adverts you have added:</h3>
  <mat-accordion class="example-headers-align">
    <mat-expansion-panel *ngFor="let advert of adverts" hideToggle="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{advert.hotels[0].name}} | {{advert.preferredEnd | date: 'MMM d'}}
        </mat-panel-title>
        <mat-panel-description>
          <div *ngIf="advert.invitationStatus === 'ACCEPTED'">{{advert.invitationStatus | stateTranslater: 'ADVERT' }}</div>
          <div *ngIf="advert.invitationStatus !== 'ACCEPTED'" class="counter">{{advert.responses.length}}</div>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <div class="advert">
        <p class="advert__text">{{advert.invitationText}}</p>
        <div class="advert__footer">
          <div class="advert__info">
            <p class="accepted-time muted">
              <mat-icon>access_time</mat-icon>{{advert.preferredStart | date: 'HH:mm'}} - {{advert.preferredEnd | date: 'HH:mm'}}
            </p>
          </div>
          <div class="advert__actions">
            <button mat-button color="accent" (click)="deleteAdvert(advert.id)">Delete</button>
          </div>
        </div>
      </div>

      <div class="responses-wrapper">
        <h3 class="mat-subheading-2">Responses</h3>
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
                <p class="accepted-time muted">
                  <mat-icon>access_time</mat-icon>{{response.proposedTime | date: 'HH:mm'}}
                  <span *ngIf="response.responseStatus === 'ACCEPTED'"> at {{advert.restos[0].name}}</span>
                </p>
              </div>
              <div class="response__actions" *ngIf="response.responseStatus !== 'ACCEPTED'">
                <button mat-button color="accent" (click)="declineResponse(advert.id, response.id)">Decline</button>
                <button mat-button color="primary" (click)="acceptResponse(advert.id, response.id)">Accept</button>
              </div>
            </div>
          </div>
        </ng-container>
      </div>

      <ng-container *ngIf="!advert.responses.length">
        <p class="muted">There are no responses yet!</p>
      </ng-container>

    </mat-expansion-panel>
  </mat-accordion>
  <p class="muted" *ngIf="!adverts.length">
    You don't have any adverts yet!
  </p>

  `,
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  @Input() adverts: Advert[];
  @Output() accept = new EventEmitter<{advertId: number; responseId: number}>();
  @Output() decline = new EventEmitter<{advertId: number; responseId: number}>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  acceptResponse(advertId, responseId) {
    this.accept.emit({advertId, responseId});
  }

  declineResponse(advertId, responseId) {
    this.decline.emit({advertId, responseId});
  }

  deleteAdvert(advertId) {
    this.delete.emit(advertId);
  }
}
