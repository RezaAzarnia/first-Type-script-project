import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <div
      className={`flex flex-col min-h-screen `}
    >
      <Navbar />
      <div className="flex-1 px-8 w-full h-full grid py-10">
        <main className="md:max-w-8xl mx-auto w-full p-7">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
