import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewturfComponent } from './userviewturf.component';

describe('UserviewturfComponent', () => {
  let component: UserviewturfComponent;
  let fixture: ComponentFixture<UserviewturfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewturfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewturfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
