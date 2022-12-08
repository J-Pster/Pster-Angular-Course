import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberChangerComponent } from './number-changer.component';

describe('NumberChangerComponent', () => {
  let component: NumberChangerComponent;
  let fixture: ComponentFixture<NumberChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
