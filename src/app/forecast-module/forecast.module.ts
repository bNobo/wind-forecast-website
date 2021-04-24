import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomorrowForecastComponent } from '../features/forecast/tomorrow-forecast/tomorrow-forecast.component';
import { WeatherTileComponent } from '../features/forecast/weather-tile/weather-tile.component';



@NgModule({
  declarations: [TomorrowForecastComponent, WeatherTileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TomorrowForecastComponent
  ]
})
export class ForecastModule { }
