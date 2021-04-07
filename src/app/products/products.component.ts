import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeleteProduct, GetListProduct, GetListProductFail, GetListProductSuccess, GetProduct, ProductsState, StoreState} from './Store';
import {Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductsState> | null = null;

  constructor(private store: Store<StoreState>) {
  }

  ngOnInit(): void {
    this.products$ = this.store.pipe(
      map(
        state => state.products
      )
    );
  }

  loadProducts(): void {
    //this.store.dispatch(GetListProductFail({payload: {message: 'test'}}));
    this.store.dispatch(GetListProduct());
  }

  getProductByID($productId: number): void {
    this.store.dispatch(GetProduct({payload: {productId: $productId}}));
  }

  deleteProductById($productId: number): void {
    this.store.dispatch(DeleteProduct({payload: {productId: $productId}}));
  }
}
