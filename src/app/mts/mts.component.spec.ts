import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtsComponent } from './mts.component';

describe('MtsComponent', () => {
  let component: MtsComponent;
  let fixture: ComponentFixture<MtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
