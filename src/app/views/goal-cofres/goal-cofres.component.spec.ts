import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCofresComponent } from './goal-cofres.component';

describe('GoalCofresComponent', () => {
  let component: GoalCofresComponent;
  let fixture: ComponentFixture<GoalCofresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalCofresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalCofresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
