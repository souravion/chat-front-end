import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoketIoService {
  socket:any
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.setupSocketConnection()
   }

  setupSocketConnection() {
    this.socket = io('http://localhost:3000', { transports : ['websocket'] });
    this.socket.emit('my message', 'Hello there from Angular.');

  }

  public getNewMessage = () => {
    this.socket.on('ADDED_DATA', (message:any) =>{
      console.log("message", message)
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
