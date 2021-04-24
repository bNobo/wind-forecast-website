import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() weather: Weather | undefined;
}
