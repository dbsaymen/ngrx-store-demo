import {createAction, props} from '@ngrx/store';
import {Product} from '../models/Product';

export const GET_LIST_PRODUCTS = '[Products] get list products';
export const GET_LIST_PRODUCTS_SUCCESS = '[Products] get list products success';
export const GET_LIST_PRODUCTS_FAIL = '[Products] get list products fail';

export const GET_PRODUCT = '[Products] get product';
export const GET_PRODUCT_SUCCESS = '[Products] get product success';
export const GET_PRODUCT_FAIL = '[Products] get product fail';

export const DELETE_PRODUCT = '[Products] delete product';
export const DELETE_PRODUCT_SUCCESS = '[Products] delete product success';
export const DELETE_PRODUCT_FAIL = '[Products] delete product fail';


export const GetListProduct = createAction(GET_LIST_PRODUCTS);
export const GetListProductSuccess = createAction(GET_LIST_PRODUCTS_SUCCESS, props<{ payload: Product[] }>());
export const GetListProductFail = createAction(GET_LIST_PRODUCTS_FAIL, props<{ payload: { message: string } }>());


export const GetProduct = createAction(GET_PRODUCT, props<{ payload: { productId: number } }>());
export const GetProductSuccess = createAction(GET_PRODUCT_SUCCESS, props<{ payload: Product }>());
export const GetProductFail = createAction(GET_PRODUCT_FAIL, props<{ payload: { message: string } }>());

export const DeleteProduct = createAction(DELETE_PRODUCT, props<{ payload: { productId: number } }>());
export const DeleteProductSuccess = createAction(DELETE_PRODUCT_SUCCESS, props<{ payload: Product }>());
export const DeleteProductFail = createAction(DELETE_PRODUCT_FAIL, props<{ payload: { message: string } }>());

