import useCart from "../customHooks/useCart";

const Footer = () => {
  const { userCart, totalPrice } = useCart();

  return (
    <ul className="mt-auto bg-neutral-950 space-y-3 text-white p-4 capitalize text-xl">
      <li>total items : {userCart.length}</li>
      <li>total price : ${totalPrice}</li>
    </ul>
  );
};

export default Footer;
