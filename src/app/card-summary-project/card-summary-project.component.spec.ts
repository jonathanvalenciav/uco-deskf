import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSummaryProjectComponent } from './card-summary-project.component';

describe('CardSummaryProjectComponent', () => {
  let component: CardSummaryProjectComponent;
  let fixture: ComponentFixture<CardSummaryProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSummaryProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSummaryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
