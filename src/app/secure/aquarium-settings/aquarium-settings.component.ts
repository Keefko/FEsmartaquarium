import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AquariumSettingsService} from '../../service/aquarium-settings.service';
import {AquariumSettings} from '../../interfaces/aquariumSettings';
import {MqttBroker} from '../../interfaces/mqttBroker';
import {MqttBrokerService} from '../../service/mqtt-broker.service';

@Component({
  selector: 'app-aquarium-settings',
  templateUrl: './aquarium-settings.component.html',
  styleUrls: ['./aquarium-settings.component.css']
})
export class AquariumSettingsComponent implements OnInit {
  id: number;
  formSettings: FormGroup;
  formMqtt: FormGroup;
  aquariumSettings: AquariumSettings;
  mqttBroker: MqttBroker;

  constructor(private router: Router, private route: ActivatedRoute, private aquariumSettingService: AquariumSettingsService,
              private formBuilder: FormBuilder, private mqttBrokerService: MqttBrokerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.aquariumSettingService.get(this.id).subscribe(
      aquariumSettings => {
        this.aquariumSettings = aquariumSettings;
        this.formSettings.patchValue(aquariumSettings);
      }
    );

    this.mqttBrokerService.get(this.id).subscribe(
      mqttBroker => {
        this.mqttBroker = mqttBroker;
        this.formMqtt.patchValue(mqttBroker);
      }
    );

    this.formSettings = this.formBuilder.group({
      name: '',
      ph: '',
      orp: '',
      temperature: '',
    });

    this.formMqtt = this.formBuilder.group({
      brokerUrl: '',
      username: '',
      password: ''
    });
  }

  updateSettings(): void{
    const data = {id: this.aquariumSettings.id, name: this.formSettings.controls.name.value,
                  ph: this.formSettings.controls.ph.value, orp: this.formSettings.controls.orp.value,
                  temperature: this.formSettings.controls.temperature.value, aquariumId: this.id };

    this.aquariumSettingService.update(data).subscribe(
      aquariumSettings => {
        this.aquariumSettings = aquariumSettings;
        this.router.navigateByUrl('/aquarium/settings/' + this.id);
      }
    );

  }

  updateMqtt(): void{
    const data = {id: this.mqttBroker.id, aquariumId: this.id, brokerUrl: this.formSettings.controls.brokerUrl.value,
      username: this.formSettings.controls.username.value, password: this.formSettings.controls.password.value};

    this.mqttBrokerService.update(data).subscribe(
      mqttBroker => {
        this.mqttBroker = mqttBroker;
        this.router.navigateByUrl('/aquarium/settings/' + this.id);
      }
    );
  }

}
