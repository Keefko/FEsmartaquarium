import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuramentComponent } from './measurament.component';

describe('MeasuramentComponent', () => {
  let component: MeasuramentComponent;
  let fixture: ComponentFixture<MeasuramentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuramentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuramentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
