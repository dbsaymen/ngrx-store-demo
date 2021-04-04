import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  DeleteProduct,
  DeleteProductFail,
  GetListProduct,
  GetListProductFail,
  GetListProductSuccess,
  GetProduct,
  GetProductSuccess
} from './products.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {ProductsService} from '../Service/products.service';
import {EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions, private productService: ProductsService) {
  }

  loadProducts: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetListProduct),
      mergeMap(
        () => this.productService.getListProducts().pipe(
          map(products => GetListProductSuccess({payload: products})),
          catchError((err) => of(GetListProductFail({payload: {message: err.message}})))
        )
      )
    )
  );

  loadProductById: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetProduct),
      mergeMap(
        (payload) => this.productService.getProductById(payload.payload.productId).pipe(
          map(product => GetProductSuccess({payload: product})),
          catchError((err) => of(GetListProductFail({payload: {message: err.message}})))
        )
      )
    )
  );

  deleteProductById: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteProduct),
      mergeMap(
        (payload) => this.productService.deleteProductById(payload.payload.productId).pipe(
          map(product => GetListProduct()),
          catchError((err) => of(DeleteProductFail({payload: {message: err.message}})))
        )
      )
    )
  );

}
