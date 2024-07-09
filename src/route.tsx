import Cart from "./Pages/Cart/Cart";
import Layout from "./components/Layout";
import Index from "./Pages/Index/Index";

export const route = [
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];
