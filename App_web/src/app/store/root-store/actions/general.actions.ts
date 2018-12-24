import { Action } from '@ngrx/store';

export enum GeneralActionTypes {
  SetTitle = '[General] Set Title'
}

export class SetTitle implements Action {
  readonly type = GeneralActionTypes.SetTitle;
  constructor(public payload: string) { }
}

export type GeneralActions = SetTitle;



