import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSPDataComponent } from './sspdata.component';

describe('SSPDataComponent', () => {
  let component: SSPDataComponent;
  let fixture: ComponentFixture<SSPDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSPDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSPDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
