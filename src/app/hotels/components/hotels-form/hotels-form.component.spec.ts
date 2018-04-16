import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFormComponent } from './hotels-form.component';

describe('HotelsFormComponent', () => {
  let component: HotelsFormComponent;
  let fixture: ComponentFixture<HotelsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
