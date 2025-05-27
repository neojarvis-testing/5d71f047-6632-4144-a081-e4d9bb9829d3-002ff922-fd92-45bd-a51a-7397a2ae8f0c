import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddfeedbackComponent } from './useraddfeedback.component';

describe('UseraddfeedbackComponent', () => {
  let component: UseraddfeedbackComponent;
  let fixture: ComponentFixture<UseraddfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseraddfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
