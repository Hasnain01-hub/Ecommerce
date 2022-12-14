import { Link, NavLink } from "@remix-run/react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const links = [
    // {
    //   label: "Home",
    //   url: "/",
    // },
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-8 pt-2">
      {/* Site Logo */}
      <div className="font-mono text-3xl font-extrabold uppercase">
        <Link to="/">
          <span style={{display:"inline-flex",alignItems:"center"}}><img className="w-28" src="/ecommerce.png" alt="ecommerce" style={{width:"60px"}} />E-Commerce</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url} className="navlink">
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Shopping Cart Indicator/Checkout Link */}
      <div className="font-semibold text-gray-600 hover:text-emerald-500">
        <NavLink
          to="/checkout"
          className="inline-flex items-center space-x-1 transition-colors duration-300"
        >
          <BiShoppingBag className="text-xl" /> <span>{cart.length}</span>
        </NavLink>
      </div>
    </nav>
  );
}
