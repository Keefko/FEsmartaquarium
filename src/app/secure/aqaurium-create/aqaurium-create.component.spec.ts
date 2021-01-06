import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqauriumCreateComponent } from './aqaurium-create.component';

describe('AqauriumCreateComponent', () => {
  let component: AqauriumCreateComponent;
  let fixture: ComponentFixture<AqauriumCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqauriumCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqauriumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
