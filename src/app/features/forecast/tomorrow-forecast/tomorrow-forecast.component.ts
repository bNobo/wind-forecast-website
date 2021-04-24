import { Component, OnInit } from '@angular/core';
import { Weather, Weather_Symbol } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-tomorrow-forecast',
  templateUrl: './tomorrow-forecast.component.html',
  styleUrls: ['./tomorrow-forecast.component.css']
})
export class TomorrowForecastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public weathers: Array<Weather> = [
    {
      title: "Morning",
      weatherSymbol: Weather_Symbol.Sunny
    },
    { 
      title: "Afternoon",
      weatherSymbol: Weather_Symbol.PartlyCloudy
    },
    { 
      title: "Evening",
      weatherSymbol: Weather_Symbol.HeavyRain
    },
    { 
      title: "Night",
      weatherSymbol: Weather_Symbol.ThunderyShowers
    }
  ]
}
