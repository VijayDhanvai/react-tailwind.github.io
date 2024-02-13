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
import UserProfile from "./View/UserProfile";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,

    children: [
      { index: true, element: <Home /> },

      { path: "tab", element: <TabPage /> },
      { path: "accordiaon", element: <AccordionPage /> },
      { path: "catalogue", element: <CataloguePage /> },
      { path: "blog", element: <Blog /> },
      {
        path: "blog/:title",
        element: <BlogDetail />,
      },

      { path: "cart", element: <ProtectedRoute component={CartDetail} /> },

      {
        path: "profile",
        element: <ProtectedRoute component={UserProfile} />,
      },
    ],
  },

  { path: "*", element: <NoMatch /> },
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={router} />;
};
