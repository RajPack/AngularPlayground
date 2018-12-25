import { Action } from '@ngrx/store';
import { ProductsActions, ProductsActionTypes } from '../actions/products.actions';
import { Product } from 'src/app/interfaces/product.interface';

export interface State {
  list: Product[]
}

export const initialState: State = {
  list: []
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {

    case ProductsActionTypes.FinishLoadProducts:
      return {
        list: [...action.payload]
      };


    default:
      return state;
  }
}
