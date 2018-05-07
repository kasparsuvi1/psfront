import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-adverts',
  template: `
  <mat-accordion class="example-headers-align">
    <mat-expansion-panel *ngFor="let advert of adverts" hideToggle="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{advert.hotels[0].name}} | {{advert.preferredEnd | date: 'MMM d'}}
        </mat-panel-title>
        <mat-panel-description>
          <!-- {{advert.advertStatus | stateTranslater: 'ADVERT' }} TODO: VAJA MUUTA COUNTERI VÄRV OELKU JÄRGI -->
          <div class="counter">{{advert.responses.length}}</div>
        </mat-panel-description>
      </mat-expansion-panel-header>

      <ng-container *ngFor="let response of advert.responses">
        <div class="response">
          <div class="response__body">
            <h3 class="mat-subheading-1">{{response.user.alias}} | <span class="muted">{{response.user.occupation.name}}</span></h3>
            <p class="mat-body-1">{{response.responseText}}</p>
          </div>
          <div class="response__footer">
            <div class="response__info">
              <p class="accepted-time muted"><mat-icon>access_time</mat-icon>{{response.proposedTime | date: 'HH:mm'}}</p>
            </div>
            <div class="response__actions">
              <button mat-button color="accent">Decline</button>
              <button mat-button color="primary">Accept</button>
            </div>
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="!advert.responses.length">
        <p class="muted">There is none responses yet!</p>
      </ng-container>
    </mat-expansion-panel>
  </mat-accordion>

  `,
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  @Input() adverts: Advert[];

  constructor() {}

  ngOnInit() {}
}
