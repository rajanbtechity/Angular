import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WBNDataComponent } from './wbndata.component';

describe('WBNDataComponent', () => {
  let component: WBNDataComponent;
  let fixture: ComponentFixture<WBNDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WBNDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WBNDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
