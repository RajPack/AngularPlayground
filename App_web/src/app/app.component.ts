import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title$: Observable<string>;
  constructor(public appService: AppService) {
  }
  ngOnInit() {
    this.title$ = this.appService.fetchTitle();
  }
}
