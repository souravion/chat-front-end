import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoketIoService } from './soket-io.service';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
  ],
  providers: [SoketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
