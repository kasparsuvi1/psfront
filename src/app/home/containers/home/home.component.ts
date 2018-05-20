import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../core/store';
import {Go} from '../../../core/store/actions/router.actions';

@Component({
  selector: 'app-home',
  template: `
    <section class="jumbotron">
      <span class="jumbotron__login" routerLink="/login">Login</span>
      <img class="jumbotron__logo" src="../../../../assets/images/title_logo2.png" alt="Logo">

      <h1>Meet strangers</h1>
      <p>With the same intrests. No strings attached, you meet, eat, talk and learn from each other.
      When not interested, nobody can reach you.</p>
      <button class="jumbotron__button" routerLink="/register" mat-raised-button>GET STARTED</button>
    </section>

    <section class="container about">
      <h2 class="container__header"><span>ABOUT</span></h2>
      <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut erat sed erat cursus ullamcorper id ac risus.
      Nullam a purus vulputate, pharetra nibh ut, tristique enim. Nulla venenatis malesuada purus, ac dapibus nisl feugiat eu.
      Praesent id ullamcorper arcu. Morbi pharetra est luctus mollis laoreet. Donec lacinia vulputate consectetur.
      Nunc at eros eu mauris sollicitudin cursus ultricies vel enim. Sed rhoncus quis dui vitae scelerisque.
      Nulla cursus ipsum ut felis pulvinar, quis aliquam neque volutpat. Duis posuere orci metus, id molestie eros aliquam a.
      Vestibulum rhoncus nisl eu neque finibus aliquet. Fusce laoreet orci at sem maximus congue. Maecenas sit amet scelerisque tortor,
      nec fermentum tellus. Donec non dolor quam. Fusce rhoncus mattis nisi, faucibus imperdiet nisi scelerisque non.
      Duis volutpat scelerisque lacus eget consequat.
      </p>
    </section>

    <section class="container community">
      <h2 class="container__header"><span>COMMUNITY</span></h2>
      <div class="community__wrapper">
        <p class="community__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut erat sed erat cursus
        ullamcorper id ac risus. Nullam a purus vulputate, pharetra nibh ut, tristique enim. Nulla venenatis malesuada purus,
        ac dapibus nisl feugiat eu. Praesent id ullamcorper arcu. Morbi pharetra est luctus mollis laoreet. Donec lacinia
        vulputate consectetur. Nunc at eros eu mauris sollicitudin cursus ultricies vel enim. Sed rhoncus quis dui vitae scelerisque.
        Nulla cursus ipsum ut felis pulvinar, quis aliquam neque volutpat. Duis posuere orci metus, id molestie eros aliquam a.
        Vestibulum rhoncus nisl eu neque finibus aliquet. Fusce laoreet orci at sem maximus congue. Maecenas sit amet scelerisque tortor,
        nec fermentum tellus. Donec non dolor quam. Fusce rhoncus mattis nisi, faucibus imperdiet nisi scelerisque non.
        Duis volutpat scelerisque lacus eget consequat.
        </p>
        <!-- <img class="community__image" src="../../../../assets/images/community.jpg" alt="community image"> -->
      </div>


    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}
}
