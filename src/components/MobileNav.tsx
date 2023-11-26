import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-orange-800 font-bold" : "";

type MobileMenuProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ showMobileMenu, setShowMobileMenu }: MobileMenuProps) => {
  return (
    <>
      <div
        onClick={() => setShowMobileMenu(false)}
        className={`fixed inset-0 z-50 min-w-full min-h-full bg-background/10 backdrop-blur-sm 
        ${showMobileMenu ? "" : "-translate-x-full"}
        `}
      ></div>

      <nav
        aria-label="mobile-nav"
        className={`fixed inset-0 z-50 w-2/3 min-h-screen  bg-background duration-500 ease-in-out border border-b-foreground 
        ${showMobileMenu ? "" : "-translate-x-full"}`}
      >
        <section className="p-4 flex justify-between items-center">
          <Link to="/">
            <p className="text-3xl font-semibold">
              Elek<span className="text-orange-700">Tra</span>.
            </p>
          </Link>
          <Button onClick={() => setShowMobileMenu(false)} variant="ghost">
            <X />
          </Button>
        </section>

        <ul className="py-4 px-5 flex flex-col gap-2">
          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold border-b border-gray-500 pb-2">
            <NavLink to="shop" className={activeLink}>
              Shop
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold border-b border-gray-500 pb-2">
            <NavLink to="admin" className={activeLink}>
              Admin
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold border-b border-gray-500 pb-2">
            <NavLink to="login" className={activeLink}>
              Login
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold border-b border-gray-500 pb-2">
            <NavLink to="register" className={activeLink}>
              Register
            </NavLink>
          </li>

          <li className="hover:text-orange-700 transition hover:scale-105 hover:font-semibold border-b border-gray-500 pb-2">
            <NavLink to="orders" className={activeLink}>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MobileNav;
