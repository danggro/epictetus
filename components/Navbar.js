import { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      <nav className="pt-[71px] md:block hidden">
        <div className="container">
          <div className="flex items-center text-white">
            <div className="w-2/12 ">
              <NavLogo />
            </div>
            <div className="w-6/12 ">
              <NavItem />
            </div>
            <div className="w-4/12 text-right">
              <NavSearch />
            </div>
          </div>
        </div>
      </nav>
      <nav className="md:hidden">
        <div className="container">
          <div className="flex items-center justify-between text-white py-10">
            <div className="w-3/12 ">
              <img
                src="/menu.svg"
                className="opacity-60 cursor-pointer"
                onClick={() => setOffcanvas(true)}
              />
            </div>
            <div className="w-6/12 flex justify-center">
              <NavLogo />
            </div>
            <div className="w-3/12 text-right">
              {search ? (
                <img
                  src="/x.svg"
                  className={`w-7 inline-block opacity-60 cursor-pointer  `}
                  onClick={() => setSearch(false)}
                />
              ) : (
                <img
                  src="/search.svg"
                  className={`w-6 inline-block opacity-60 cursor-pointer  `}
                  onClick={() => setSearch(true)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`bg-first z-10 fixed top-0 md:hidden w-full h-full transition-all ${
          offcanvas ? `left-0` : `-left-full`
        }`}
      >
        <NavItem vertical />
        <img
          src="/x.svg"
          alt=""
          className="absolute w-8 right-8 top-8 cursor-pointer "
          onClick={() => setOffcanvas(false)}
        />
      </div>
      <div
        className={`md:hidden absolute left-0 w-full px-10 top-[90px] transition-all ${
          search ? "" : "scale-0"
        }`}
      >
        <NavSearch className="w-full" />
      </div>
    </>
  );
}
