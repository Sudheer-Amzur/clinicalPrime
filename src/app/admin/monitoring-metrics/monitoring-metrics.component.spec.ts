import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringMetricsComponent } from './monitoring-metrics.component';

describe('MonitoringMetricsComponent', () => {
  let component: MonitoringMetricsComponent;
  let fixture: ComponentFixture<MonitoringMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
