import {Pipe, PipeTransform} from '@angular/core';

enum AdvertTranslations {
  COMPLETED = 'Completed',
  ACCEPTED = 'Whoop! It\'s arranged',
  NOT_ACCEPTED = 'Not accepted!'
}

enum ResponseTranslations {
  DECLINED = 'Sorry, it was declined',
  NOT_ANSWERED = 'Not answered!',
  ACCEPTED = 'Whoop! It\'s arranged'
}

export type translaterPipeArgs = 'ADVERT' | 'RESPONSE';

@Pipe({
  name: 'stateTranslater'
})
export class StateTranslaterPipe implements PipeTransform {
  transform(value, args: translaterPipeArgs): string {
    if (!value) {
      return;
    }
    switch (args) {
      case 'ADVERT':
        return AdvertTranslations[value];
      case 'RESPONSE':
        return ResponseTranslations[value];
      default:
        return value;
    }
  }
}
