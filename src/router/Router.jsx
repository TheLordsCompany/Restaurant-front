import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Gallery from "../views/Gallery";
import Contact from "../views/Contact";
import QrMenu from "../views/QrMenu";
import Main from "../apps/Main";
import Category from "../views/Category";


function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />}>
          <Route index element={<Home />} />    
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="qrmenu" element={<QrMenu />} />
          <Route path="category" element={<Category />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}


export default Router;