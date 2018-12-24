import * as General from './general.reducer';

export const rootReducers = {
    general: General.reducer
};


export interface RootState {
    general: General.State
};

