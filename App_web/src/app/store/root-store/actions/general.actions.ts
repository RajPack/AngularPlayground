import { Action } from '@ngrx/store';

export enum GeneralActionTypes {
  SetTitle = '[General] Set Title',
  LoadTitle = '[General] Load Title'
}

export class LoadTitle implements Action {
  readonly type = GeneralActionTypes.LoadTitle;
  constructor(public payload: string) { }
}

export class SetTitle implements Action {
  readonly type = GeneralActionTypes.SetTitle;
  constructor(public payload: string) { }
}

export type GeneralActions = SetTitle | LoadTitle;



