import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GeneralEffects } from './effects/general.effects';
import { ProductStoreModule } from '../product-store/product-store.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducers),
    ProductStoreModule,
    EffectsModule.forRoot([GeneralEffects])
  ]
})
export class RootStoreModule { }
