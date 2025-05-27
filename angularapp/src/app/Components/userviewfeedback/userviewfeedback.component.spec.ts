import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewfeedbackComponent } from './userviewfeedback.component';

describe('UserviewfeedbackComponent', () => {
  let component: UserviewfeedbackComponent;
  let fixture: ComponentFixture<UserviewfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
