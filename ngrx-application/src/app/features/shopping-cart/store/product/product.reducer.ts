import * as productActions from './product.actions';

import { createReducer, on } from "@ngrx/store";

import { IProduct } from "../../models/product";

export interface IProductState {
    products: IProduct[];
    error: string;
    loading: boolean;
}

const initialState: IProductState = {
    products: [],
    error: '',
    loading: false,
};

export const productReducer = createReducer(
    initialState,
    on(productActions.productsLoad, (state) => ({
        ...state,
        loading: true,
    })),
    on(productActions.productsLoadedSuccess, (state, action) => ({
        ...state,
        products: action.products,
        loading: false,
    })),
    on(productActions.productsLoadedError, (state, action) => ({
        ...state,
        error: action.error,
        loading: false,
    })),
);