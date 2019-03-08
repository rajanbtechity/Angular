import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VZOTDataComponent } from './vzotdata.component';

describe('VZOTDataComponent', () => {
  let component: VZOTDataComponent;
  let fixture: ComponentFixture<VZOTDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VZOTDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VZOTDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
