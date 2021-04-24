import { Component, EventEmitter, Output } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private _subscription: PushSubscription | null = null;
  private baseUrl = environment.baseUrl;
  public operationName: string = 'Subscribe';
  @Output() subscribedEvent = new EventEmitter<boolean>();

  constructor(
    private swPush: SwPush,
    private httpClient: HttpClient) {
      swPush.subscription.subscribe((subscription) => {
        this._subscription = subscription;

        if (this._subscription === null)
        {
          this.operationName = 'Subscribe';
          this.subscribedEvent.emit(false);
        }
        else {
          this.operationName = 'Unsubscribe';
          this.subscribedEvent.emit(true);
        }
    });
  }

  operation() {
    (this._subscription === null) ? this.subscribe() : this.unsubscribe(this._subscription.endpoint);
  }

  private subscribe() {
    if (!environment.production) {
      this.subscribedEvent.emit(true);
      this.operationName = 'Unsubscribe';
      return;
    }

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
    if (!environment.production) {
      this.subscribedEvent.emit(false);
      this.operationName = 'Subscribe';
      return;
    }

    this.swPush.unsubscribe()
      .then(() => this.httpClient.delete(this.baseUrl + 'api/PushSubscriptions/' + encodeURIComponent(endpoint)).subscribe(() => { },
        error => console.error(error)
      ))
      .catch(error => console.error(error));
  }
}
