import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HubConnectionState, Subject } from '@microsoft/signalr';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HookPublicationsService {

  private hubConnection: HubConnection | null = null;
  private hubUrl = environment.apiUrl + '/new-pubs-hub';
  private newMessageSubject = new BehaviorSubject<any>({});
  
  constructor() {
    //this.startConnection();
    //this.fakeReceiver();
  }

  private startConnection(): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl)
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.registerOnServerEvents();
      })
      .catch((err) => console.error('Error while starting connection: ' + err));
  }

  private registerOnServerEvents(): void {
    if (this.hubConnection) {
      console.log("received message!");
      this.hubConnection.on('ReceiveMessage', (data: any) => {
        this.newMessageSubject.next(data);
      });
    }
  }

  public onNewMessage(): Observable<any> {
    return this.newMessageSubject.asObservable();
  }

  public stopConnection(): void {
    if (this.hubConnection && this.hubConnection.state === HubConnectionState.Connected) {
      this.hubConnection.stop().then(() => {
        console.log('Connection stopped');
      }).catch((err) => console.error('Error while stopping connection: ' + err));
    }
  }


  public fakeReceiver(){
    console.log("emitting fake");
    setInterval(() => {this.newMessageSubject.next(true)}, 5000);
  }


}
