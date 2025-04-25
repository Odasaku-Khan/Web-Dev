import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagescomponentComponent } from './messagescomponent.component';

describe('MessagescomponentComponent', () => {
  let component: MessagescomponentComponent;
  let fixture: ComponentFixture<MessagescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagescomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
