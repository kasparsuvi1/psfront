import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestosComponent } from './restos.component';

describe('RestosComponent', () => {
  let component: RestosComponent;
  let fixture: ComponentFixture<RestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
