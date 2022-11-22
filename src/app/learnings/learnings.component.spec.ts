import { ComponentFixture, TestBed } from '@angular/core/testing';

import { learningsComponent } from './learnings.component';

describe('learningsComponent', () => {
  let component: learningsComponent;
  let fixture: ComponentFixture<learningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ learningsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(learningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
