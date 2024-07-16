import Layout from "./components/Layout";
import Index from "./Pages/Index/Index";
import UserCart from "./Pages/UserCart/UserCart";

export const route = [
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/cart", element: <UserCart /> },
    ],
  },
];
