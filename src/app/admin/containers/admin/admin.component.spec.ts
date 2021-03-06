import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {StatisticsComponent} from '../../components/statistics/statistics.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from '../../../core/store';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        StatisticsComponent],
      imports: [StoreModule.forRoot(reducers, {metaReducers})]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const users = {test: 'test'};

    expect(component).toBeTruthy();
  });
});
