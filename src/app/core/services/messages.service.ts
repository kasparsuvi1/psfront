import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
import * as Messages from '../../messages.json';

export class Message {
  type: MessageType;
  message: string;
}

export enum MessageType {
  Success,
  Info,
  Warning
}

export const messages = Messages;

@Injectable()
export class MessagesService {
  private subject = new Subject<Message>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear  messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.keepAfterRouteChange ? (this.keepAfterRouteChange = false) : this.clear();
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.showMessage(MessageType.Success, message);
  }

  info(message: string) {
    this.showMessage(MessageType.Info, message);
  }

  warn(message: string) {
    console.log(message);
    console.log('olkensiiin2');
    this.showMessage(MessageType.Warning, message);
  }

  showMessage(type: MessageType, message: string) {
    this.subject.next(<Message>{type, message});
  }

  clear() {
    this.subject.next();
  }
}
