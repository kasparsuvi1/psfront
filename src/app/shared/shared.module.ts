import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

// components
import {MessageComponent} from './components/message/message.component';
import {TableComponent} from './components/table/table.component';
import {LoaderComponent} from './components/loader/loader.component';

// pipes
import {DataSourcePipe} from './pipe/data-source.pipe';
import {HourMinPipe} from './pipe/hour-min.pipe';
import {StateTranslaterPipe} from './pipe/state-translater.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [MessageComponent, TableComponent, DataSourcePipe, HourMinPipe, StateTranslaterPipe, LoaderComponent],
  exports: [MessageComponent, TableComponent, DataSourcePipe, HourMinPipe, StateTranslaterPipe, LoaderComponent]
})
export class SharedModule {}
