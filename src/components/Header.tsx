import { MenuIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const activeLink = ({ isActive }: { isActive: boolean }) => {
  return isActive ? "text-orange-700 font-bold" : "";
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky z-50 top-0 bg-background min-w-full py-4 px-4 flex items-center justify-between shadow-lg sm:px-8">
      <div className="ml-4">
        <Link to="/">
          <p className="text-3xl font-semibold">
            Elek<span className="text-orange-700">Tra</span>.
          </p>
        </Link>
      </div>

      {/* Large Screen Navigations */}
      <nav className="hidden sm:block">
        <ul className="flex gap-2">
          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="shop" className={activeLink}>
              Shop
            </NavLink>
          </li>

          <span>|</span>
          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="admin" className={activeLink}>
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="mr-3 sm:block hidden">
        <ul className="flex gap-3">
          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="login" className={activeLink}>
              Login
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="register" className={activeLink}>
              Register
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="orders" className={activeLink}>
              Orders
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold">
            <NavLink to="cart" className={`${activeLink} relative`}>
              <ShoppingCart />
              <p className="text-xs w-5 h-5 flex items-center justify-center bg-slate-200 rounded-full absolute -top-3 -right-4 text-slate-800 font-semibold">
                10
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Small Screens Navigation */}
      <div className="sm:hidden flex gap-4 items-center">
        <NavLink to="cart" className={`${activeLink} relative`}>
          <ShoppingCart size="20px" />
          <p className="text-xs w-4 h-4 flex items-center justify-center bg-slate-200 rounded-full absolute -top-3 -right-3 text-slate-800 font-semibold">
            10
          </p>
        </NavLink>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="hover:scale-x-110 transition-transform ease-in-out duration-300"
        >
          <MenuIcon />
        </Button>
      </div>
      <MobileNav
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </header>
  );
};
export default Header;
