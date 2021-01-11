import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumSettingsComponent } from './aquarium-settings.component';

describe('AquariumSettingsComponent', () => {
  let component: AquariumSettingsComponent;
  let fixture: ComponentFixture<AquariumSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
