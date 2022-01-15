import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLoginComponent } from './dummy-login.component';

describe('DummyLoginComponent', () => {
  let component: DummyLoginComponent;
  let fixture: ComponentFixture<DummyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
