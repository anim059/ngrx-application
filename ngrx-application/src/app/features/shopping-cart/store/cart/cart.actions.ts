import { createAction, props } from "@ngrx/store";

import { IProduct } from "../../models/product";

export const addProductToCart = createAction(
    '[Cart API] Product Loaded Success',
    props<{ product: IProduct }>()
) 

export const removeProductFromCart = createAction(
    '[Cart API] Product Removed Success',
    props<{ productId: number }>()
) 