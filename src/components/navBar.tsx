import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  toggleMode?: () => void;
}
const NavBar = ({ toggleMode }: Props) => {
  // scrolling navbar
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollUp = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollUp(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollUp);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollUp]);
  return (
    <nav
      className={` bg-bg_bar text-bg_light py-3 mx-auto w-11/12 sticky top-0 z-10 rounded-b-3xl ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out z-50 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* devscoops logo */}
          <div className=" items-center hidden md:flex">
            <Link to="/" className="text-white text-xl font-bold">
              <StaticImage
                className=""
                alt="Gatsby Image"
                src="../images/logo-dark.png"
                width={100}
              />
            </Link>
          </div>
          {/* menu links */}
          <div className="items-center hidden md:flex ">
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 link-hover"
            >
              Blog
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-white px-3 py-2 link-hover"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 link-hover"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 link-hover"
            >
              Contact
            </Link>
          </div>

          {/* toggler */}

          <div className="flex md:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost drawer-button"
                >
                  <StaticImage
                    src="../images/toggler-btn.png"
                    alt="menu dropdown button"
                    className="w-6 object-scale-down	"
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu px-4 py-10 pb-15 w-60 min-h-full bg-base-200 text-base-content justify-between">
                  {/* Sidebar content here */}

                  <div>
                    <li className="border-b-2 border-b-caterpillar py-2">
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="border-b-2 border-b-caterpillar py-2">
                      <Link to="/blog">BLOG</Link>
                    </li>
                    <li className="border-b-2 border-b-caterpillar py-2">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="border-b-2 border-b-caterpillar py-2">
                      <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="border-b-2 border-b-caterpillar py-2">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </div>
                  {/* close button */}
                  <button
                    className="btn btn-circle btn-outline mx-auto border-caterpillar border-2 "
                    onClick={() => {
                      document.getElementById("my-drawer")!.click();
                    }}
                  >
                    <IoCloseSharp />
                  </button>
                </ul>
              </div>
            </div>
          </div>

          {/* dark mode */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onClick={toggleMode}
            />

            {/* sun icon */}
            <svg
              color="#fec800"
              className="swap-off fill-current w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              color="lightblue"
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
