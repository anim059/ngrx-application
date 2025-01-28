import { ICartState } from "src/app/features/shopping-cart/store/cart/cart.reducer";
import { IProductState } from "src/app/features/shopping-cart/store/product/product.reducer";

export interface IAppState {
    productState: IProductState,
    cartState: ICartState
}