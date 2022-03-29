import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUserComponent } from './goal-user.component';

describe('GoalUserComponent', () => {
  let component: GoalUserComponent;
  let fixture: ComponentFixture<GoalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
