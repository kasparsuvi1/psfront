import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message, MessagesService, MessageType} from '../../../core/services/messages.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-message',
  template: `
    <div class="messages-wrapper">
      <div *ngFor="let message of messages" class="message">
        <div [class]="'message__icon ' + cssClass(message)">
          <mat-icon class="icon">{{ message.type === MessageType.Success ? 'done' : 'info_outline'}}</mat-icon>
        </div>
        <div class="message__content">
          <div class="message__text">
            {{message.message}}
          </div>
        </div>
        <a class="message__close" (click)="removeMessage(message)">&times;</a>
      </div>
    </div>
  `,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  MessageType = MessageType;
  $subscription: Subscription;

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.$subscription = this.messagesService.getMessage().subscribe((message: Message) => {
      if (!message) {
        // clear messages when an empty message is received
        this.messages = [];
        return;
      }

      // add message to array
      this.messages = [...this.messages, message];
      setTimeout(() => {
        this.messages = this.messages.filter(i => i !== message);
      }, 4500);
    });
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }

  removeMessage(message: Message) {
    this.messages = this.messages.filter(x => x !== message);
  }

  cssClass(message: Message) {
    if (!message) {
      return;
    }

    // return css class based on message type
    switch (message.type) {
      case MessageType.Success:
        return 'message__icon--success';
      case MessageType.Warning:
        return 'message__icon--danger';
      case MessageType.Info:
        return 'message__icon--info';
    }
  }
}
