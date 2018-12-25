import { Injectable } from '@angular/core';
import { BackendService } from '../shared-services/backend.service';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store/root-store/reducers';
import { SetTitle, LoadTitle } from '../store/root-store/actions/general.actions';
import { getTitle } from '../store/root-store/general.selector';
import { LoadProducts } from '../store/product-store/actions/products.actions';
import { productSelector, getProductList } from '../store/product-store/product.selector';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private backend: BackendService, private store: Store<RootState>) { }

  fetchTitle() {
    let appInfo$ = this.backend.get({
      url: '/api/appInfo'
    });
    appInfo$.subscribe((data: any) => {
      this.store.dispatch(new LoadTitle(data.title));
    });
    return this.store.pipe(select(getTitle));
  }

  setTitle(title: string) {
    this.store.dispatch(new SetTitle(title));
  }

  fetchProducts() {
    this.store.dispatch(new LoadProducts());
    return this.store.pipe(select(getProductList))

  }
}
