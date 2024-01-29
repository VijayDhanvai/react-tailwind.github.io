import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CartContextProvider } from "../Store/Shopping-Cart-Context";

import Breadcrumb from "../Components/Breadcrumb";
function Layout() {
  return (
    <CartContextProvider>
      <Navbar />
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

      <div className="lg:container mx-auto mt-20 px-4">
        <Breadcrumb />

        <Outlet />
      </div>
    </CartContextProvider>
  );
}

export default Layout;
