import { createSelector } from "@ngrx/store";
import { selectRootState } from "src/app/core/store/app.selector";

export const selectProductsState = createSelector(
    selectRootState,
    (state) => state.productState
)

export const allProducts = createSelector(
    selectProductsState,
    (state) => state.products
)

export const productError = createSelector(
    selectProductsState,
    (state) => state.error
)