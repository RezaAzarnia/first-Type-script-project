import Cart from "../../components/Cart";
type Product = {
  id: number;
  productName: string;
  productImg: string;
  price: number;
};
const products: Product[] = [
  {
    id: 1,
    productName: "apple watch",
    price: 39.99,
    productImg: "/public/iphone.jfif",
  },
  {
    id: 2,
    productName: "samsung watch",
    price: 29.99,
    productImg: "/public/samsung.jfif",
  },
  {
    id: 3,
    productName: "shiaumi watch",
    price: 59.99,
    productImg: "/public/shiaumi.jfif",
  },
];
const Index = () => {
  return (
    <>
      <h1 className="text-3xl text-center uppercase mb-5 ">
        this is our products
      </h1>
      <div className="grid grid-cols-3 grid-rows-[400px] gap-3">
        {products?.map((product) => <Cart {...product} key={product.id} />)}
      </div>
    </>
  );
};

export default Index;
