import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { SoketIoService } from './soket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messageList: string[] = [];

  constructor(private http: HttpClient , private socketService: SoketIoService){

  }
  ngOnInit(): void {
    this.socketService.getNewMessage().subscribe((message: string) => {
    this.messageList.push(message);
      console.log('messageList', this.messageList)
    })
  }

  fetchData() {

    this.http.get('http://localhost:3000/api/getchat').subscribe(data => {

      console.log(data);

    });

  }
  title = 'MyApp';
}
