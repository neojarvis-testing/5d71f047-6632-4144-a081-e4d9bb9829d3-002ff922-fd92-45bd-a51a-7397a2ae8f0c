import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewbookingComponent } from './userviewbooking.component';

describe('UserviewbookingComponent', () => {
  let component: UserviewbookingComponent;
  let fixture: ComponentFixture<UserviewbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserviewbookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
