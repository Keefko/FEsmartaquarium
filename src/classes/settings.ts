import {EventEmitter} from '@angular/core';
import {AquariumSettings} from '../app/interfaces/aquariumSettings';


export  class Settings {
  static userEmmiter = new EventEmitter<AquariumSettings>();
}
