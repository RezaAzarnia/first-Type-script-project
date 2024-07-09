import { ReactNode, createContext, useMemo, useReducer } from "react";

type Product = {
  id: number;
  productName: string;
  productImg: string;
  price: number;
  quantity?: number;
};
enum REDUCER_ACTIONS {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
}
type QuantityPayload = {
  id: number;
  quantity: number;
};

type Actions =
  | { type: REDUCER_ACTIONS.ADD_TO_CART; payload: Product }
  | { type: REDUCER_ACTIONS.DELETE_FROM_CART; payload: number }
  | { type: REDUCER_ACTIONS.CLEAR_CART }
  | { type: REDUCER_ACTIONS.UPDATE_QUANTITY; payload: QuantityPayload };

type ContextTypes = {
  state: Product[];
  dispatch: React.Dispatch<Actions>;
};
const initState: Product[] = [];

const cartReducer = (state: typeof initState, action: Actions): Product[] => {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_TO_CART: {
      const isExistProduct: Product | undefined = state.find(
        (product) => product.id === action.payload.id
      );
      if (isExistProduct) {
        return state.map((item: Product) => {
          return item.id == action.payload.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item;
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case REDUCER_ACTIONS.DELETE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);

    case REDUCER_ACTIONS.CLEAR_CART:
      return [];

    case REDUCER_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      return state.map((product: Product) => {
        return product.id == id ? { ...product, quantity } : product;
      });
    }
    default:
      return state;
  }
};

const cartContext = createContext<ContextTypes>(null!);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { CartProvider, cartContext };
