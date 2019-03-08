import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSPApiComponent } from './sspapi.component';

describe('SSPApiComponent', () => {
  let component: SSPApiComponent;
  let fixture: ComponentFixture<SSPApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSPApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSPApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
