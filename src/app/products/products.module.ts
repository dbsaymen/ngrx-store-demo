import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {ProductsService} from './Service/products.service';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {RouterModule, Routes} from '@angular/router';
import {productsReducer} from './Store';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './Store/products.effect';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {
}
