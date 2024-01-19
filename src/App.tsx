import { FC } from "react";
import TabPage from "./View/TabPage";
import Layout from "./View/Layout";
import NoMatch from "./View/NoMatch";
import Home from "./View/Home";
import CataloguePage from "./View/CataloguePage";
import AccordionPage from "./View/AccordionPage";
import Blog from "./View/Blog";
import CartDetail from "./View/CartDetail";
import { Routes, Route } from "react-router-dom";
import "./style.css";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="tab" element={<TabPage />} />
        <Route path="accordiaon" element={<AccordionPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="cart" element={<CartDetail />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
