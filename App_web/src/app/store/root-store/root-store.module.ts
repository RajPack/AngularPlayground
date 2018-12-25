import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GeneralEffects } from './effects/general.effects';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([GeneralEffects])
  ]
})
export class RootStoreModule { }
