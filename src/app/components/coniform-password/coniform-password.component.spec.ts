import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConiformPasswordComponent } from './coniform-password.component';

describe('ConiformPasswordComponent', () => {
  let component: ConiformPasswordComponent;
  let fixture: ComponentFixture<ConiformPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConiformPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConiformPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
