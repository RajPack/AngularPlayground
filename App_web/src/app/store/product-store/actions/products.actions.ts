import { Action } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  FinishLoadProducts = '[Products] Finish Load Products'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
  constructor() {}
}

export class FinishLoadProducts implements Action {
  readonly type = ProductsActionTypes.FinishLoadProducts;
  constructor(public payload: Product[]) {}
}


export type ProductsActions = LoadProducts | FinishLoadProducts;
