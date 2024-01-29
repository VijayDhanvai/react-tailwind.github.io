import { FC } from "react";
import TabPage from "./View/TabPage";
import Layout from "./View/Layout";
import NoMatch from "./View/NoMatch";
import Home from "./View/Home";
import CataloguePage from "./View/CataloguePage";
import AccordionPage from "./View/AccordionPage";
import Blog from "./View/Blog";
import BlogDetail from "./View/BlogDetail";
import CartDetail from "./View/CartDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <Home /> },
      // { path: "/", element: <Home /> },
      { path: "tab", element: <TabPage /> },
      { path: "accordiaon", element: <AccordionPage /> },
      { path: "catalogue", element: <CataloguePage /> },
      { path: "blog", element: <Blog /> },
      {
        path: "blog/:title",
        element: <BlogDetail />,
        // loader: LoaderBlogData,
      },
      { path: "cart", element: <CartDetail /> },
    ],
  },

  { path: "*", element: <NoMatch /> },
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={router} />;
};
