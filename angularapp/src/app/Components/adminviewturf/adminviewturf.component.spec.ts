import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewturfComponent } from './adminviewturf.component';

describe('AdminviewturfComponent', () => {
  let component: AdminviewturfComponent;
  let fixture: ComponentFixture<AdminviewturfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewturfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewturfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
