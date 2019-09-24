import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRoomComponent } from './board-room.component';

describe('BoardRoomComponent', () => {
  let component: BoardRoomComponent;
  let fixture: ComponentFixture<BoardRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
