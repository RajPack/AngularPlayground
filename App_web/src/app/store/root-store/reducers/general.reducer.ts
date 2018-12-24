import { Action } from '@ngrx/store';
import { GeneralActions, GeneralActionTypes } from '../actions/general.actions';


export interface State {
  title: string;
}

export const initialState: State = {
  title: null
};

export function reducer(state = initialState, action: GeneralActions): State {
  switch (action.type) {
    case GeneralActionTypes.SetTitle:
      return { ...state, title: action.payload };
      break;
    default:
      return state;
  }
}
