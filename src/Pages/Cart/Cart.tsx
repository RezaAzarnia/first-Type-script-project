import useCart from "../../customHooks/useCart";

const Cart = () => {
  const { userCart, deleteCartItem, updateQuantity } = useCart();
  return (
    <table className="w-full">
      <tbody>
        {userCart.map((product) => {
          return (
            <tr
              className=" w-full grid grid-cols-5 justify-items-center items-center"
              key={product.id}
            >
              <td className="flex items-center">
                <img
                  src={product.productImg}
                  alt={product.productName}
                  className="w-2/3"
                />
                <>{product.productName}</>
              </td>
              <td>${product.price}</td>

              <td>
                <select
                  className="border border-stone-400 p-1"
                  defaultValue={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, Number(e.target.value))
                  }
                >
                  {Array.from({ length: 20 }, (_, index: number) => {
                    return (
                      <option value={index + 1} key={index + 1}>
                        {index + 1}
                      </option>
                    );
                  })}
                </select>
              </td>

              <td>{product.price * product.quantity!}</td>

              <td onClick={() => deleteCartItem(product.id)}>delete</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Cart;
