import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {ScriptLoaderService} from "../../services/script-loader.service";

declare var ymaps: any;

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  mapIsLoading: boolean = false;
  constructor(private scriptLoader: ScriptLoaderService) { }

  ngOnInit(): void {
    this.mapIsLoading = true;

    this.subscription = this.scriptLoader.loadService("ymap")
      .subscribe(() => {
        this.mapIsLoading = false;

        ymaps.ready(this.configureMap);
    });
  }

  configureMap() {
    const myMap = new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 14,
      controls: ['routeButtonControl']
    });

    const control = myMap.controls.get('routeButtonControl');

    control.routePanel.options.set({
      allowSwitch: false,
      reverseGeocoding: true,
      types: {auto: true}
    });
    control.routePanel.geolocate('from');
    control.state.set('expanded', true);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
