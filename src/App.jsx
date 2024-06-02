import "./App.css";
import Navbar from "./navBar";
import Home from "./pages/home/home";
import About from "./pages/About/about";
import Services from "./pages/Services/services";
import Contact from "./pages/Contact/contact";
import { Routes, Route } from "react-router-dom";
import Phone_Number from "./pages/Contact/Phone_Number/phoneNumber";

function App() {
  // const path = window.location.pathname;
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Navbar />
      {path === "/" && <Home />}
      {path === "/about" && <About />}
      {path === "/services" && <Services />}
      {path === "/contact" && <Contact />} */}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="phoneNumber" element={<Phone_Number />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
