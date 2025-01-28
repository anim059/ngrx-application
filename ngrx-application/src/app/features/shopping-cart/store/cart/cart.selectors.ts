import { createSelector } from "@ngrx/store";
import { selectRootState } from "src/app/core/store/app.selector";

export const selectCartProductsState = createSelector(
    selectRootState,
    (state) => state.cartState
)

export const allCartProducts = createSelector(
    selectCartProductsState,
    (state) => state.products
)

export const totalCartProducts = createSelector(
    selectCartProductsState,
    (state) => state.products.length
)

export const productError = createSelector(
    selectCartProductsState,
    (state) => state.error
)

export const productLoadingStatus = createSelector(
    selectCartProductsState,
    (state) => state.loading
)