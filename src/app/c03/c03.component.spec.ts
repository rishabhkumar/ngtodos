import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C03Component } from './c03.component';

describe('C03Component', () => {
  let component: C03Component;
  let fixture: ComponentFixture<C03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
