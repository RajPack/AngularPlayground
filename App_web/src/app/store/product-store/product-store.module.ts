import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './reducers/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './effects/products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductStoreModule { }
