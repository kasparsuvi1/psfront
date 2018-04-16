import {Pipe, PipeTransform} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Pipe({
  name: 'dataSource'
})
export class DataSourcePipe implements PipeTransform {
  transform(values: any[], args?: any): any {
    return values ? new MatTableDataSource(values) : new MatTableDataSource([]);
  }
}
