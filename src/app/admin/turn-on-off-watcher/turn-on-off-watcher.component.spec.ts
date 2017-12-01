import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnOnOffWatcherComponent } from './turn-on-off-watcher.component';

describe('TurnOnOffWatcherComponent', () => {
  let component: TurnOnOffWatcherComponent;
  let fixture: ComponentFixture<TurnOnOffWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnOnOffWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnOnOffWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
