import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOFApiComponent } from './lofapi.component';

describe('LOFApiComponent', () => {
  let component: LOFApiComponent;
  let fixture: ComponentFixture<LOFApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOFApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOFApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
