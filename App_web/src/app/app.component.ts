import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title$: Observable<string>;
  products$: Observable<Product[]>

  constructor(public appService: AppService) {
  }
  ngOnInit() {
    this.title$ = this.appService.fetchTitle();
    this.products$ = this.appService.fetchProducts();
  }

  setTitle(title: { value: string }) {
    this.appService.setTitle(title.value);
    title.value = "";
  }


}
