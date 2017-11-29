import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierRuleConfigComponent } from './carrier-rule-config.component';

describe('CarrierRuleConfigComponent', () => {
  let component: CarrierRuleConfigComponent;
  let fixture: ComponentFixture<CarrierRuleConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierRuleConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierRuleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
