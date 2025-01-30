import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { ElectronicProductService } from '../services/electronic-product.service';
import { IElectronicProduct } from '../models/electronic-product';
import { IProduct } from '../../shopping-cart/models/product';
import { state } from '@angular/animations';

type ProductsState = {
    products: IElectronicProduct[];
    isLoading: boolean;
    filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    filter: { query: '', order: 'asc' },
};

export const BookElectronicProductStore = signalStore(
    withState(initialState),
    withComputed(({ products, filter }) => ({
        sortProducts: computed(() => {
            const direction = filter.order() === 'asc' ? 1 : -1;
            return products().sort((a: IElectronicProduct, b: IElectronicProduct) =>
                a.price > b.price ? direction : -direction
            );
        })
    })),
    withMethods((store, electronicProductService = inject(ElectronicProductService))=>({
        updateSortOrder(order: 'asc' | 'desc'): void {
            patchState(store, (state)=> ({
                filter: { ...state.filter, order }
            }))
        },
        async loadElectronicProducts(): Promise<void> {
            patchState(store, { isLoading: true });
            const products = await electronicProductService.getElectronicProducts();
            patchState(store, { products, isLoading: false });
        },
        async SearchElectronicProducts(query: string): Promise<void> {
            patchState(store, { isLoading: true });
            const products = await electronicProductService.filterProducts(query)
            patchState(store, { products, isLoading: false });
        }
    }))
);