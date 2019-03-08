import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NCOGApiComponent } from './ncogapi.component';

describe('NCOGApiComponent', () => {
  let component: NCOGApiComponent;
  let fixture: ComponentFixture<NCOGApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NCOGApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NCOGApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
