import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerAdvertComponent } from './answer-advert.component';

describe('AnswerAdvertComponent', () => {
  let component: AnswerAdvertComponent;
  let fixture: ComponentFixture<AnswerAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
