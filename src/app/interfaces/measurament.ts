import {Timestamp} from 'rxjs';

export interface Measurament {
  id: number;
  aquariumId: number;
  ph: number;
  orp: number;
  temperature: number;
  createTime: Timestamp<any>;
}
