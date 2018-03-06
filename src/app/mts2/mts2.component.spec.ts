import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mts2Component } from './mts2.component';

describe('Mts2Component', () => {
  let component: Mts2Component;
  let fixture: ComponentFixture<Mts2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mts2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
