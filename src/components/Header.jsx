import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/global.css";
import { CartContext } from "./Root/Root";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <nav className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8 rounded-full dark:text-violet-400"
          >
            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
          </svg>
          <span className="ml-2 text-2xl flex items-center">Smart Shop</span>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : undefined} flex items-center px-4 -mb-1 border-b-2 dark:border-transparent `}
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/shop"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : undefined} flex items-center px-4 -mb-1 border-b-2 dark:border-transparent`}
            >
              Shop
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/about"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : undefined} flex items-center px-4 -mb-1 border-b-2 dark:border-transparent`}
            >
              About
            </NavLink>
          </li>
          <li className="flex relative">
            <NavLink
              rel="noopener noreferrer"
              to="/cart"
              className={`${(isActive) =>
                isActive
                  ? "active"
                  : undefined} flex items-center px-4 -mb-1 border-b-2 dark:border-transparent`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="left-10 bottom-8 dark:text-gray-100 absolute">
                {cart.length}
              </span>
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
