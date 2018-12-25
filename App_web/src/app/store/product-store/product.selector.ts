import * as ProductReducer from './reducers/products.reducer';
import { createSelector } from '@ngrx/store';

export const productSelector = createSelector((state: any) => {
    return state.products
});

export const getProductList = createSelector(productSelector, (state: ProductReducer.State) => {
    return state.list;
});
