import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGetAllComponent } from './message-get-all.component';

describe('MessageGetAllComponent', () => {
  let component: MessageGetAllComponent;
  let fixture: ComponentFixture<MessageGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
