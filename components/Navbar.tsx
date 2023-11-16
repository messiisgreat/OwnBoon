import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav
      className={`px-5 sm:px-4 text-[0.9rem] py-2.5 sticky w-full bg-white z-20 top-0 left-0 text-[#2E2E2E]  font-poppins `}
    >
      <div className="container bg-white flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://flowbite.com/docs/images/logo.svg"
          className="flex items-center"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Ownboon Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Own<span className="text-cyan">Boon</span>
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => {
              session ? signOut() : signIn();
            }}
            className="  text-white focus:ring-4 focus:outline-none  login  w-[8.6vw] h-[3.7vh] text-center mr-3 md:mr-0 rounded-full"
          >
            {session ? session?.user?.name || "Null" : "Login"}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex  items-center p-2 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center text-[0.9rem] justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <Link
                href="/"
                className={`Link  block py-2 pl-3 pr-4 md:p-0 ${
                  router.pathname == "/" ? "activelink font-bold" : ""
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full  py-2 pl-3 pr-4 md:p-0 font-medium     md:w-auto "
              >
                Explore
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden  p-5 font-light  divide-y divide-gray-100 rounded-lg shadow w-55 "
              >
                <ul
                  className="px-5 bg-white  text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/habits"
                      className={`Link  block p-4  ${
                        router.pathname == "/habits"
                          ? "activelink font-bold"
                          : ""
                      }`}
                    >
                      Habits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/productivity"
                      className={`Link block p-4  ${
                        router.pathname == "/productivity"
                          ? "activelink font-bold"
                          : ""
                      }`}
                    >
                      Productivity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recovery"
                      className={`Link  block p-4  ${
                        router.pathname == "/creators"
                          ? "activelink font-bold"
                          : ""
                      }`}
                    >
                      Rehabiliation
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#benefit" className=" block py-2 Link pl-3 pr-4 md:p-0 ">
                Benefit
              </a>
            </li>
            <li>
              <a href="#about" className="Link  block py-2 pl-3 pr-4 md:p-0 ">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
