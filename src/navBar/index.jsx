import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-slate-500 flex gap-10 items-center justify-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </div>
  );
};

export default Navbar;
