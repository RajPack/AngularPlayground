import { createSelector, State } from '@ngrx/store';
import { RootState } from './reducers/index';
import * as General from './reducers/general.reducer';


export const generalSelector = createSelector( (state: RootState) => state.general );

export const getTitle = createSelector(generalSelector, (state: General.State) => state.title );
