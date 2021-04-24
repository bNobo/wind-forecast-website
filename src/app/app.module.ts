import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ViewTemplateComponent } from './views/view-template/view-template.component';
import { HomeComponent } from './views/home/home.component';
import { ForecastModule } from './forecast-module/forecast.module';
import { NotificationModule } from './notification-module/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewTemplateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ForecastModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
