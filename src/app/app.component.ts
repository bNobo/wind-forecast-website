import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private _subscription: PushSubscription | null = null;
  private baseUrl: string = 'http://localhost:5000/';
  public operationName: string = 'Subscribe';

  constructor(
    private swPush: SwPush,
    private httpClient: HttpClient) {
    swPush.subscription.subscribe((subscription) => {
      this._subscription = subscription;
      this.operationName = (this._subscription === null) ? 'Subscribe' : 'Unsubscribe';
    });
  }

  operation() {
    (this._subscription === null) ? this.subscribe() : this.unsubscribe(this._subscription.endpoint);
  }

  private subscribe() {
    // Retrieve public VAPID key from the server
    this.httpClient.get(this.baseUrl + 'api/PublicKey', { responseType: 'text' })
      .subscribe(publicKey => {
        // Request subscription with the service worker
        console.log("Request subscription with the service worker");
        this.swPush.requestSubscription({
          serverPublicKey: publicKey
        })
        // Distribute subscription to the server
        .then(subscription =>
          this.httpClient.post(this.baseUrl + 'api/PushSubscriptions', subscription, this.httpOptions)
            .subscribe(
              () => { console.log(subscription); },
              error => console.error(error)
            ))
            .catch(error => console.error(error));
    },
    error => console.error(error));
  }

  private unsubscribe(endpoint: string) {
    this.swPush.unsubscribe()
      .then(() => this.httpClient.delete(this.baseUrl + 'api/PushSubscriptions/' + encodeURIComponent(endpoint)).subscribe(() => { },
        error => console.error(error)
      ))
      .catch(error => console.error(error));
  }
}