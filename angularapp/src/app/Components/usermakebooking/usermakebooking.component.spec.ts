import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermakebookingComponent } from './usermakebooking.component';

describe('UsermakebookingComponent', () => {
  let component: UsermakebookingComponent;
  let fixture: ComponentFixture<UsermakebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermakebookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermakebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
