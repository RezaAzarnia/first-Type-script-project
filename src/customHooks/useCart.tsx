import { useCallback, useContext, useMemo } from "react";
import { cartContext } from "../context/CartContext";
import { Product } from "../components/types";

enum REDUCER_ACTIONS {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
}

const useCart = () => {
  const context = useContext(cartContext);

  if (!context) throw new Error("context is undefind");

  const { state, dispatch } = context;

  const addToCart = useCallback(
    (product: Product): void => {
      dispatch({
        type: REDUCER_ACTIONS.ADD_TO_CART,
        payload: product,
      });
    },
    [dispatch]
  );

  const deleteCartItem = useCallback(
    (productId: number): void => {
      dispatch({
        type: REDUCER_ACTIONS.DELETE_FROM_CART,
        payload: productId,
      });
    },
    [dispatch]
  );

  const clearCart = () => {
    dispatch({ type: REDUCER_ACTIONS.CLEAR_CART });
  };

  const totalPrice = useMemo((): string => {
    const price = state.reduce(
      (accumulator: number, current: Product): number => {
        return (accumulator += current.price * current.quantity!);
      },
      0
    );
    return price.toFixed(2);
  }, [state]);

  const isInCart = useCallback(
    (productId: number): boolean => {
      return state.some((item: Product) => item.id == productId);
    },
    [state]
  );

  const updateQuantity = useCallback(
    (id: number, quantity: number): void => {
      dispatch({
        type: REDUCER_ACTIONS.UPDATE_QUANTITY,
        payload: { id, quantity },
      });
    },
    [dispatch]
  );
  return {
    userCart: state,
    addToCart,
    clearCart,
    deleteCartItem,
    totalPrice,
    isInCart,
    updateQuantity,
  };
};
export default useCart;
