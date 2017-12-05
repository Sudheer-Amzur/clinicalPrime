import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimantHistoryComponent } from './claimant-history.component';

describe('ClaimantHistoryComponent', () => {
  let component: ClaimantHistoryComponent;
  let fixture: ComponentFixture<ClaimantHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimantHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
