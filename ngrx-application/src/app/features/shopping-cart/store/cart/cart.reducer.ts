import * as cartActions from './cart.actions';

import { createReducer, on } from "@ngrx/store";

import { IProduct } from "../../models/product";

export interface ICartState {
    products: IProduct[];
    error: string;
    loading: boolean;
}

const initialState: ICartState = {
    products: [],
    error: '',
    loading: false,
};

export const cartReducer = createReducer(
    initialState,

    on(cartActions.addProductToCart, (state, action) => ({
        ...state,
        products: [...state.products, action.product],
        loading: false,
    })),

    on(cartActions.removeProductFromCart, (state, action) => (
        {
            ...state,
            products: state.products.filter(product => product.id !== action.productId),
            loading: false,
        }
    ))
);