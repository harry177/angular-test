import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRandomIconComponent } from './show-random-icon.component';

describe('ShowRandomIconComponent', () => {
  let component: ShowRandomIconComponent;
  let fixture: ComponentFixture<ShowRandomIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRandomIconComponent]
    });
    fixture = TestBed.createComponent(ShowRandomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
