declare module "platform/hooks/useStore" {
  function useStore(): {
    incrementCounter: () => void;
    decrementCounter: () => void;
    incrementByAmountCounter: (amount: number) => void;
    getProductList: () => void;
  };

  export default useStore;
}

declare module "platform/types/storeState" {
  export interface ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  export interface ProductState {
    products: ProductItem[];
  }
  export interface CounterState {
    value: number;
  }
}

declare module "platform/hooks/useStoreSelector" {
  import type { CounterState, ProductState } from "platform/types/storeState";
  export type RootState = {
    counter: CounterState;
    product: ProductState;
  };

  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useStoreSelector: TypedUseSelectorHook<RootState>;
}

declare module "platform/providers/StoreProvider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}
