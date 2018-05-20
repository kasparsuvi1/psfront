import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatIconRegistry, MatPaginator, MatSort} from '@angular/material';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

export interface FilterPayload {
  role?: string;
  keyword?: string;
}

@Component({
  selector: 'app-table',
  template: `
    <div class="table">
      <mat-form-field *ngIf="filter" class="input-inline">
        <input [placeholder]="filter.filterString" matInput (keyup)="applyFilter($event.target.value)">
      </mat-form-field>

      <mat-table #table [dataSource]="data" matSort *ngIf="data?.data?.length">
        <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
          <mat-header-cell *matHeaderCellDef mat-sort-header>
            {{ column.header }}
          </mat-header-cell>
          <mat-cell *matCellDef="let row" [ngSwitch]="column.columnDef">

            <ng-container *ngSwitchCase="'hotelName'">
              <ng-container *ngIf="row.hotel && row.hotel.name">{{row.hotel.name}}</ng-container>
              <ng-container *ngIf="!row.hotel"></ng-container>
            </ng-container>

            <p *ngSwitchDefault>{{column.cell(row)}}</p>
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row
          [ngClass]="{'clickable': clickable}"
          (click)="selectRow(row)"
          *matRowDef="let row; columns: displayedColumns;">
        </mat-row>
      </mat-table>

      <mat-paginator
        *ngIf="paginator"
        [pageSize]="20"
        [pageSizeOptions]="[5, 10, 20, 50]">
      </mat-paginator>

      <div class="table__empty" *ngIf="!data?.data?.length && !loading">
        Andmed puuduvad
      </div>
      <app-loader *ngIf="loading && !data?.data?.length"></app-loader>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() data;
  @Input() paginator;
  @Input() columns;
  @Input() loading?;
  @Input() loaded?;
  @Input() filter?;
  @Input() path?;
  @Input() clickable;
  @Input() storeFilter?;
  @Output() selectFilter: EventEmitter<FilterPayload> = new EventEmitter();
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pager: MatPaginator;

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.displayedColumns = this.columns.map(i => i.columnDef);
    if (this.data.filteredData.length <= 20) {
      this.paginator = false;
    }
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
    this.data.paginator = this.pager;
  }

  statusChange(status) {
    if (this.storeFilter) {
      if (status.isUserInput) {
        const value = status.source.value === 'all' ? null : status.source.value;
        this.selectFilter.emit({role: value});
      }
    } else if (status.isUserInput) {
      this.applyFilter(status.source.value);
    }
  }

  applyFilter(filterValue: string) {
    if (this.storeFilter) {
      this.selectFilter.emit({keyword: filterValue});
    } else {
      this.data.filter = filterValue.trim().toLowerCase();
    }
  }

  selectRow(row) {
    if (this.clickable) {
      this.router.navigate([this.path + row.id]);
    }
  }
}
