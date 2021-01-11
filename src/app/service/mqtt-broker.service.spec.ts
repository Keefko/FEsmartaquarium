import { TestBed } from '@angular/core/testing';

import { MqttBrokerService } from './mqtt-broker.service';

describe('MqttBrokerService', () => {
  let service: MqttBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqttBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
