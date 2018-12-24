import { Action } from '@ngrx/store';
import { OrdersActions, OrdersActionTypes } from '../actions/orders.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: OrdersActions): State {
  switch (action.type) {

    case OrdersActionTypes.LoadOrderss:
      return state;


    default:
      return state;
  }
}
