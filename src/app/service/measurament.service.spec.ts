import { TestBed } from '@angular/core/testing';

import { MeasuramentService } from './measurament.service';

describe('MeasuramentService', () => {
  let service: MeasuramentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasuramentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
