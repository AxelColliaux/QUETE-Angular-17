import { Component, OnInit } from '@angular/core';
import { InterceptorService } from './services/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '17-Interceptor';

  data?: any[];

  constructor(private interceptorService: InterceptorService) { }

  ngOnInit() {
    this.interceptorService.getData().subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
}
