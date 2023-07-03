import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
//import logodc from "/images/logodc.png";
//const logodc = "/images/logodc.png";
const logodc = `${process.env.PUBLIC_URL}/images/Logodc_logo.png`;
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-6 bg-background-color">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <NavLink to="/">
          <img src={logodc} alt="Logo" className="w-16 h-16" />
        </NavLink>
        {isMobile ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <ul className="absolute px-4 py-2 bg-white rounded-lg shadow-md w-36 top-16 right-4">
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 text-white font-ibm hover:text-white"
                    activeClassName="text-purple-600"
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="block py-2 text-white font-ibm hover:text-white"
                    activeClassName="text-purple-600"
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="flex space-x-4">
            <li className="group">
              <NavLink to="/about">
                <button
                  className="px-4 py-2 text-xl font-bold transition duration-300 ease-in-out transform rounded-lg w-28 bg-purple text-description-color hover:text-white hover:bg-purple-600 hover:scale-105"
                  activeClassName="bg-purple-600 text-white"
                >
                  About
                </button>
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/login">
                <button
                  className="px-4 py-2 text-xl font-bold transition duration-300 ease-in-out transform rounded-lg w-28 bg-purple text-description-color hover:scale-105 hover:text-white group-hover:bg-purple-600"
                  activeClassName="bg-purple-600 text-white"
                >
                  Login
                </button>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
