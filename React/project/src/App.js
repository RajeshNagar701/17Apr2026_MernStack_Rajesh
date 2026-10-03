import { BrowserRouter, Route, Routes } from "react-router-dom";
import H_Header from "./website/component/H_Header";
import Home from "./website/pages/Home";
import Footer from "./website/component/Footer";
import Header from "./website/component/Header";
import About from "./website/pages/About";
import Blog from "./website/pages/Blog";
import Blog_details from "./website/pages/Blog_details";
import Contact from "./website/pages/Contact";
import Portfolio from "./website/pages/Portfolio";
import Portfolio_details from "./website/pages/Portfolio_details";
import Pricing from "./website/pages/Pricing";
import Pricing_details from "./website/pages/Pricing_details";
import Services from "./website/pages/Services";

function App() {
  return (
    <div>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><H_Header/><Home/><Footer/>  </>}></Route>
            <Route path="/about" element={<><Header title="About"/><About/><Footer/>  </>}></Route>
            <Route path="/blog" element={<><Header title="Blog"/><Blog/><Footer/>  </>}></Route>
            <Route path="/blog_details" element={<><Header title="Blog Details"/><Blog_details/><Footer/>  </>}></Route>
            <Route path="/contact" element={<><Header title="Contact"/><Contact/><Footer/>  </>}></Route>
            <Route path="/portfolio" element={<><Header title="Portfolio"/><Portfolio/><Footer/>  </>}></Route>
            <Route path="/portfolio_details" element={<><Header title="Portfolio Details"/><Portfolio_details/><Footer/>  </>}></Route>
            <Route path="/pricing" element={<><Header title="Pricing"/><Pricing/><Footer/>  </>}></Route>
            <Route path="/pricing_details" element={<><Header title="Pricing Details"/><Pricing_details/><Footer/>  </>}></Route>
            <Route path="/services" element={<><Header title="Services"/><Services/><Footer/>  </>}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
