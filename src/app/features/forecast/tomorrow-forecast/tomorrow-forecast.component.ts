import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Weather, Weather_Symbol } from 'src/app/interfaces/weather';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tomorrow-forecast',
  templateUrl: './tomorrow-forecast.component.html',
  styleUrls: ['./tomorrow-forecast.component.css']
})
export class TomorrowForecastComponent implements OnInit {

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  private readonly baseUrl: string;

  ngOnInit(): void {
    this.httpClient
      .get(this.baseUrl + 'api/forecasts/tomorrow', { responseType: 'text' })                 
      .subscribe(json => {
        this.weathers = JSON.parse(json).weathers;
      });
  }

  public weathers: Array<Weather> = []
}
