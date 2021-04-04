import {Product} from '../models/Product';
import {Action, createReducer, on} from '@ngrx/store';
import {GetListProduct, GetListProductFail, GetListProductSuccess, GetProduct, GetProductFail, GetProductSuccess} from './products.actions';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface StoreState {
  products: ProductsState;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  loaded: false,
  error: null,
};


export const _productsReducer = createReducer<ProductsState>(
  initialState,
  on(GetListProduct, (state) => {
    return {...state, loading: true};
  }),
  on(GetListProductSuccess, (state, {payload}) => {
    return {...state, loading: false, loaded: true, products: payload};
  }),
  on(GetListProductFail, (state, {payload}) => {
    return {...state, loading: false, loaded: false, error: payload.message};
  }),
  on(GetProduct, (state, {payload}) => {
    return {...state, loading: true, loaded: false};
  }),
  on(GetProductSuccess, (state, {payload}) => {
    return {...state, loading: false, loaded: true, products: [payload]};
  }),
  on(GetProductFail, (state, {payload}) => {
    return {...state, loading: false, loaded: false, error: payload.message};
  }),
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
