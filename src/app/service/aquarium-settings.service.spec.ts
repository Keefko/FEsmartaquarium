import { TestBed } from '@angular/core/testing';

import { AquariumSettingsService } from './aquarium-settings.service';

describe('AquariumSettingsService', () => {
  let service: AquariumSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquariumSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
