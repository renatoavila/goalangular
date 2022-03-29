import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalLoginComponent } from './goal-login.component';

describe('GoalLoginComponent', () => {
  let component: GoalLoginComponent;
  let fixture: ComponentFixture<GoalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
