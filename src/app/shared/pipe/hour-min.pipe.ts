import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hourMin'
})
export class HourMinPipe implements PipeTransform {
  transform(value = {hour: 0, minute: 0}): string {
    return `${this.pad(value.hour)}:${this.pad(value.minute)}`;
  }

  pad(value: number) {
    return String(value).padStart(2, '0');
  }
}
