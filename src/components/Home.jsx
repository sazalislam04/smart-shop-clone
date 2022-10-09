import React from "react";
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
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-800 dark:text-gray-50"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-2 m-2 text-lg border rounded dark:border-gray-700 dark:text-violet-900"
            >
              Learn more
            </button>
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
