import { ReactNode, useMemo } from "react";
import Button from "./Button";
import { Product } from "./types";

type RowProps = {
  product: Product;
  onUpdate: (id: number, quantity: number) => void;
  onDelete: (id: number) => void;
};

export default function TableRow({ product, onUpdate, onDelete }: RowProps) {
  const { id: productId, productImg, productName, price, quantity } = product;

  const productCountOptions = useMemo((): ReactNode => {
    return Array.from({ length: 20 }, (_, index: number) => {
      return (
        <option value={index + 1} key={index + 1}>
          {index + 1}
        </option>
      );
    });
  }, []);
  
  return (
    <tr className=" w-full grid grid-cols-5 justify-items-center items-center border-b border-gray-400 py-4">
      <td className="flex items-center">
        <img src={productImg} alt={productName} className="w-2/3" />
        <>{productName}</>
      </td>
      <td>${price}</td>

      <td>
        <select
          className="border border-stone-400 p-1"
          defaultValue={quantity}
          onChange={(e) => {
            onUpdate(productId, +e.target.value);
          }}
        >
          {productCountOptions}
        </select>
      </td>

      <td>${(product.price * product.quantity!).toFixed(2)}</td>

      <td>
        <Button variant="danger" onClick={() => onDelete(productId)}>
          delete
        </Button>
      </td>
    </tr>
  );
}
