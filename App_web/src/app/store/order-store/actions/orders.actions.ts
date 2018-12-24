import { Action } from '@ngrx/store';

export enum OrdersActionTypes {
  LoadOrderss = '[Orders] Load Orderss'
}

export class LoadOrderss implements Action {
  readonly type = OrdersActionTypes.LoadOrderss;
}

export type OrdersActions = LoadOrderss;
