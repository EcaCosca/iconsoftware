import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-gray-200 dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              {/* <!--
                                Icon when menu is closed.

                                Heroicon name: outline/bars-3

                                Menu open: "hidden", Menu closed: "block"
                            --> */}
              <svg
                class="block h-6 w-6"
                xmlns="../img/logo-rgb.webp"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
                                Icon when menu is open.

                                Heroicon name: outline/x-mark

                                Menu open: "block", Menu closed: "hidden"
                            --> */}
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* FULL SIZE NAVBAR */}

          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://static.wixstatic.com/media/283e5d_31415b50e1aa4409928ca78c1deb5f1d~mv2.png/v1/fill/w_200,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-rgb.png"
                alt="icon-software"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://static.wixstatic.com/media/283e5d_31415b50e1aa4409928ca78c1deb5f1d~mv2.png/v1/fill/w_200,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-rgb.png"
                alt="icon-software"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  class="text-gray-800 dark:bg-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#"
                  class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  What we do
                </a>

                <a
                  href="#"
                  class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
