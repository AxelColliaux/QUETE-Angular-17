import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '17-Interceptor';

  data?: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
}
