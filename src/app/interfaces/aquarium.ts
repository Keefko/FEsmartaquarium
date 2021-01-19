import {Measurament} from './measurament';

export interface Aquarium {
  id: number;
  userId: number;
  name: string;
  measurament?: Measurament;
}

