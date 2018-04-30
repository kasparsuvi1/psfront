import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserViewState} from '../../store/reducers';
import {GetUser, UpdateUser} from '../../store/actions';
import {AccountModel} from '../../../core/models/account.models';
import {Observable} from 'rxjs/Observable';
import {getUser} from '../../store/selectors';
import {State, GetDegrees, GetOccupations} from '../../../core/store';
import {getDegrees} from '../../../core/store/selectors/degrees.selectors';
import {getOccupations} from '../../../core/store/selectors/occupations.selectors';

@Component({
  selector: 'app-profile',
  template: `
    <!--<app-user-form  [user]="$user | async"
                    [occupations]="$occupations | async"
                    [degrees]="$degrees | async"
                    (save)="save($event)">
    </app-user-form>-->
    <div class="card">
      <div class="card__image">
        <img class="activator" src="https://pixinvent.com/materialize-material-design-admin-template/images/gallary/23.png" alt="user background">
      </div>
      <div class="card__content">
        <div class="card__profile__image">
          <img src="https://pixinvent.com/materialize-material-design-admin-template/images/avatar/avatar-7.png" alt="profile image" class="circle">
        </div>
        <div>
          <h4 class="focused">{{ user.alias ? user.alias : 'alias' }}</h4>
          <p class="muted">{{ user.occupation ? user.occupation.name : 'Programmer' }}</p>
        </div>
        <div>
          <h4 class="focused">32</h4>
          <p class="muted">Posted Adverts</p>
        </div>
        <div>
          <h4 class="focused">32</h4>
          <p class="muted">Posted responses</p>
        </div>
        <div>
          <h4 class="focused">234</h4>
          <p class="muted">Days awesome</p>
        </div>
        <button class="edit" mat-fab color="primary">
          <mat-icon>mode_edit</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  $user: Observable<User>;
  $occupations: Observable<Occupation[]>;
  $degrees: Observable<Degree[]>;

  constructor(private store: Store<UserViewState>, private globalStore: Store<State>) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    // user
    this.$user = this.store.select(getUser);
    this.store.dispatch(new GetUser(this.user.id));

    // degrees
    this.$degrees = this.globalStore.select(getDegrees);
    this.globalStore.dispatch(new GetDegrees());

    // occupations
    this.$occupations = this.globalStore.select(getOccupations);
    this.globalStore.dispatch(new GetOccupations());
  }

  save(user) {
    this.store.dispatch(new UpdateUser(user));
  }
}
