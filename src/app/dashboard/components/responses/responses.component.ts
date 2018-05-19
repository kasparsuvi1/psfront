import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-responses',
  template: `
  <h3 class="mat-title">Responses you have added:</h3>
  <mat-accordion class="example-headers-align">
    <mat-expansion-panel *ngFor="let response of responses" hideToggle="true">

      <mat-expansion-panel-header>
        <mat-panel-title>
          {{response.advert.hotels[0].name}} | {{response.proposedTime | date: 'MMM d'}}
        </mat-panel-title>
        <mat-panel-description>
          {{response.responseStatus | stateTranslater: 'RESPONSE' }}
        </mat-panel-description>
      </mat-expansion-panel-header>

      <ng-container>
        <div class="response">
          <div class="response__body">
            <h3 class="mat-subheading-1">
              {{response.advert.user.alias || 'Anonymous'}} |
              <span class="muted">{{response.advert.user.occupation?.name || 'No occupation'}}</span>
            </h3>
            <p class="mat-body-1 advert-text">{{response.advert.advertText}}</p>
            <p class="mat-body-1 muted">{{response.responseText}}</p>
          </div>
          <div class="response__footer">
            <div class="response__info">
              <p class="accepted-time muted">
                <mat-icon>access_time</mat-icon>{{response.proposedTime | date: 'HH:mm'}}
                <span *ngIf="response.responseStatus === 'ACCEPTED'"> at {{response.advert.restos[0].name}}</span>
              </p>
            </div>
          </div>
        </div>
      </ng-container>

    </mat-expansion-panel>
  </mat-accordion>
  <p class="muted" *ngIf="!responses.length">
    You don't have any resonses yet!
  </p>
  `,
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  @Input() responses: Response[];

  constructor() {}

  ngOnInit() {}
}
