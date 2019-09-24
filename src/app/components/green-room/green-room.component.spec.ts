import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenRoomComponent } from './green-room.component';

describe('GreenRoomComponent', () => {
  let component: GreenRoomComponent;
  let fixture: ComponentFixture<GreenRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
