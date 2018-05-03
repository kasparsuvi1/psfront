import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserViewState} from '../../store/reducers';
import {GetUser, UpdateUser, GetHotels, GetRestos, SetRestoFilter} from '../../store/actions';
import {AccountModel} from '../../../core/models/account.models';
import {Observable} from 'rxjs/Observable';
import {getUser, getHotels} from '../../store/selectors';
import {State, GetDegrees, GetOccupations, AddAdvert} from '../../../core/store';
import {getDegrees} from '../../../core/store/selectors/degrees.selectors';
import {getOccupations} from '../../../core/store/selectors/occupations.selectors';
import {getRestos, getFilteredRestos} from '../../store/selectors/restos.selectors';

@Component({
  selector: 'app-profile',
  template: `
    <div class="user">
      <div class="user__image">
        <img  class="activator"
              src="https://pixinvent.com/materialize-material-design-admin-template/images/gallary/23.png"
              alt="user background">
      </div>
      <div class="user__content">
        <div class="user__profile__image">
          <img  [src]="profileImagePath"
                alt="profile image"
                class="circle">
        </div>
        <div>
          <h4 class="focused">{{ user.alias ? user.alias : 'alias' }}</h4>
          <p class="muted">{{ user.occupation ? user.occupation.name : 'Unkown' }}</p>
        </div>
        <div>
          <h4 class="focused">{{ user.totalAdverts || '0'}}</h4>
          <p class="muted">Posted Adverts</p>
        </div>
        <div>
          <h4 class="focused">{{ user.totalResponses || '0'}}</h4>
          <p class="muted">Posted responses</p>
        </div>
        <div>
          <h4 class="focused">{{ daysRegistered }}</h4>
          <p class="muted">Days awesome</p>
        </div>
        <button *ngIf="!editing" class="edit" mat-fab color="primary" (click)="edit()">
          <mat-icon>mode_edit</mat-icon>
        </button>
      </div>
    </div>

    <app-user-form  *ngIf="editing"
                    [user]="$user | async"
                    [occupations]="$occupations | async"
                    [degrees]="$degrees | async"
                    (save)="save($event)">
    </app-user-form>

    <app-advert [hotels]="$hotels | async"
                [restos]="$restos | async"
                (add)="addAdvert($event)"
                (ChangeRestoFilter)="setRestoFilter($event)">
    </app-advert>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  $user: Observable<User>;
  $occupations: Observable<Occupation[]>;
  $degrees: Observable<Degree[]>;
  $hotels: Observable<Hotel[]>;
  $restos: Observable<Resto[]>;
  editing: Boolean = false;
  daysRegistered: any;
  profileImagePath = '../../../../assets/avatars/man5.png';

  constructor(private store: Store<UserViewState>, private globalStore: Store<State>) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.profileImagePath = this.getProfileImage(this.user.gender);

    // user
    this.$user = this.store.select(getUser);
    this.store.dispatch(new GetUser(this.user.id));

    // degrees
    this.$degrees = this.globalStore.select(getDegrees);
    this.globalStore.dispatch(new GetDegrees());

    // occupations
    this.$occupations = this.globalStore.select(getOccupations);
    this.globalStore.dispatch(new GetOccupations());

    // hotels
    this.$hotels = this.store.select(getHotels);
    this.store.dispatch(new GetHotels());

    // restos
    this.$restos = this.store.select(getFilteredRestos);
    this.store.dispatch(new GetRestos());

    // Get amount of days between regDate
    this.daysRegistered = Math.ceil(Math.abs(new Date().getTime() - new Date(this.user.regDate).getTime()) / (1000 * 3600 * 24));
  }

  save(user) {
    this.store.dispatch(new UpdateUser(user));
    this.edit();
  }

  addAdvert(advert) {
    this.globalStore.dispatch(new AddAdvert(advert));
  }

  setRestoFilter(id) {
    this.store.dispatch(new SetRestoFilter(id));
  }

  edit() {
    this.editing = !this.editing;
  }

  getProfileImage(gender) {
    const number = Math.floor(Math.random() * 5) + 1;

    if (gender === 'MALE') {
      return '../../../../assets/avatars/man' + number + '.png';
    } else if (gender === 'FEMALE') {
      return '../../../../assets/avatars/woman' + number + '.png';
    } else {
      return '../../../../assets/avatars/man5.png';
    }
  }
}
