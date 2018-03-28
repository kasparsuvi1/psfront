import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      Siin on kasutaja juba sisse logitud! ja näeb oma infot.
    </p>

  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
