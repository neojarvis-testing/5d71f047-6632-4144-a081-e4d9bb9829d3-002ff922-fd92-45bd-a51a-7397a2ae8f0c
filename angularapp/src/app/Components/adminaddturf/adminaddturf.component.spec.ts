import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddturfComponent } from './adminaddturf.component';

describe('AdminaddturfComponent', () => {
  let component: AdminaddturfComponent;
  let fixture: ComponentFixture<AdminaddturfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminaddturfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddturfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
