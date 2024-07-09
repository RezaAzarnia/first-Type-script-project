import { Link } from "react-router-dom";
import useCart from "../customHooks/useCart";

const Navbar = (): JSX.Element => {
  const { userCart, totalPrice, clearCart } = useCart();
  return (
    <div className="flex justify-between p-6 border-b border-red-700 ">
      <h1 className="capitalize text-2xl">Logo</h1>
      <div className="flex flex-col">
        <span>Total items : {userCart.length}</span>
        <span>Total price : ${totalPrice.toFixed(2)}</span>
        <Link
          to={"/cart"}
          className="px-4 py-3 text-white text-center bg-lime-700 capitalize mt-3 rounded hover:bg-lime-800 transition-colors"
        >
          view cart
        </Link>
        <button
          className="px-4 py-3 text-white text-center bg-red-700 capitalize mt-3 rounded hover:bg-red-800 transition-colors"
          onClick={() => clearCart()}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
