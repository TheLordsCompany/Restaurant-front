import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../views/Home"));
const About = React.lazy(() => import("../views/About"));
const Menu = React.lazy(() => import("../views/Menu"));
const Gallery = React.lazy(() => import("../views/Gallery"));
const Contact = React.lazy(() => import("../views/Contact"));
const QrMenu = React.lazy(() => import("../views/QrMenu"));
const Main = React.lazy(() => import("../apps/Main"));
const Category = React.lazy(() => import("../views/Category"));

const LoadComponent=({Component})=>(
  <Suspense   fallback={<div className="loading center">Loading ...</div>}><Component /></Suspense>
)
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoadComponent Component={Main} />}>
          <Route index element={<LoadComponent Component={Home} />} />
          <Route path="about" element={<LoadComponent Component={About} />} />
          <Route path="menu" element={<LoadComponent Component={Menu} />} />
          <Route path="gallery" element={<LoadComponent Component={Gallery} />} />
          <Route path="contact" element={<LoadComponent Component={Contact} />} />
          <Route path="qrmenu" element={<LoadComponent Component={QrMenu} />} />
          <Route path="category" element={<LoadComponent Component={Category} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
