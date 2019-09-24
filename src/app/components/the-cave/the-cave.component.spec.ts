import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCaveComponent } from './the-cave.component';

describe('TheCaveComponent', () => {
  let component: TheCaveComponent;
  let fixture: ComponentFixture<TheCaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
