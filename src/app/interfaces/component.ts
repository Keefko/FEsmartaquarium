import {Timestamp} from 'rxjs';

export interface Component {
  id?: number;
  aquariumId: number;
  name: string;
  topic: string;
  periodAllowed: boolean;
  period: Timestamp<any>;
  turnOn: boolean;
  cyklus: number;
}
