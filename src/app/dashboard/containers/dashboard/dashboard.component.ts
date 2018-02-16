import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>

  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
