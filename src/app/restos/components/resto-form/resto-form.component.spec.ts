import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoFormComponent } from './resto-form.component';

describe('RestoFormComponent', () => {
  let component: RestoFormComponent;
  let fixture: ComponentFixture<RestoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
