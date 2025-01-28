import { createAction, props } from "@ngrx/store";

import { IProduct } from "../../models/product";

export const productsLoad = createAction(
    '[Products API] Products Loaded Success'
) 

export const productsLoadedSuccess = createAction(
    '[Products API] Products Loaded Success',
    props<{ products: IProduct[] }>()
) 

export const productsLoadedError = createAction(
    '[Products API] Products Loaded Success',
    props<{ error: string }>()
)

export const updateProductPrice = createAction(
    '[Products API] Products price Update',
    props<{ productId: number, productPrice: number }>()
)