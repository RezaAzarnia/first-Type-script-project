import useCart from "../../customHooks/useCart";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TableRow from "../../components/TableRow";

const UserCart = () => {
  const { userCart, deleteCartItem, updateQuantity, totalPrice, clearCart } =
    useCart();

  return (
    <>
      {userCart.length > 0 ? (
        <>
          <table className="w-full ">
            <tbody>
              {userCart.map((product) => {
                return (
                  <TableRow
                    product={product}
                    key={product.id}
                    onUpdate={updateQuantity}
                    onDelete={deleteCartItem}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="space-y-2">
            <h1 className="mt-4 text-2xl font-bold capitalize">
              orders summary
            </h1>
            <p>you have {userCart.length} items in your cart</p>
            <p>your total payment is : ${totalPrice} </p>
            <Button
              variant="warning"
              onClick={() => {
                clearCart();
                alert("you orders submited successfully");
              }}
            >
              submit orders
            </Button>
          </div>
        </>
      ) : (
        <h1>
          cart is empty back to main page{" "}
          <Link to={"/"} className="text-blue-700 underline underline-offset-2">
            home
          </Link>
        </h1>
      )}
    </>
  );
};

export default UserCart;
