import React from "react";
import { Link } from "react-router-dom";
import img from "../img/hero.jpg";

const Home = () => {
  return (
    <section>
      <div className="dark:bg-violet-200">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl tracking-wide font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            Welcome To Smart Shop
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/shop">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-800 dark:text-gray-50 flex items-center"
              >
                <span className="mr-2">Shop Now</span>
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded font-medium dark:border-gray-700 dark:text-violet-900 flex items-center"
              >
                <span className="mr-2">Learn more</span>
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
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={img}
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Home;
