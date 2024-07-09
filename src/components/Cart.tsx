import  useCart  from "../customHooks/useCart";

type Cartprops = {
  id: number;
  productName: string;
  productImg: string;
  price: number;
};

const Cart = (props: Cartprops): JSX.Element => {
  const { addToCart, isInCart } = useCart();
  const { id, productName, productImg, price } = props;
  return (
    <div className="flex flex-col p-2 border border-lime-900 w-full">
      <div className="w-full h-2/3">
        <img src={productImg} className="w-full h-full object-fill" />
      </div>

      <div className="mt-auto text-center">
        <h3 className="text-xl capitalize font-semibold">{productName}</h3>
        <p>${price}</p>
        {isInCart(id) ? <span>in the cart ✔</span> : ""}
        <span></span>
      </div>

      <button
        className="mt-auto bg-purple-900 text-white px-4 py-2 rounded-md capitalize 
      hover:bg-purple-950 transition-colors
      "
        onClick={() => addToCart(props)}
      >
        add to cart
      </button>
    </div>
  );
};

export default Cart;
