import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsActionTypes, LoadProducts, FinishLoadProducts } from '../actions/products.actions';
import { BackendService } from 'src/app/shared-services/backend.service';
import { switchMap, map } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    switchMap((action: any) => {
      return this.backend.get({url: '/api/allProducts'}).pipe(
        map((data: Product[]) => {
          return new FinishLoadProducts(data)
        })
      )
    })
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
