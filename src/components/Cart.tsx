import useCart from "../customHooks/useCart";
import Button from "./Button";
import { Product } from "./types";

const Cart = (props: Product): JSX.Element => {
  const { addToCart, isInCart } = useCart();

  const { id, productName, productImg, price } = props;

  return (
    <div className="flex flex-col p-2 border border-gray-400 w-full rounded">
      <div className="w-full h-2/3 max-h-72">
        <img src={productImg} className="w-full h-full object-fill scale-75" />
      </div>

      <div className="mt-auto text-center space-y-2">
        <h3 className="text-xl capitalize font-semibold">{productName}</h3>
        <p>${price}</p>
        {isInCart(id) ? <p className="text-green-900">in the cart ✔</p> : ""}
      </div>
      <Button onClick={() => addToCart(props)}>add to cart</Button>
    </div>
  );
};

export default Cart;
