import React, { useEffect } from "react";
import { useState } from "react";
function Header() {
  const [isScroll, setisScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function MobileButton() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classNameList.toggle("hidden");
  }

  return (
    <>
      <header
        className={`${
          isScroll ? "newClass" : "bg-gray-900"
        } text-white w-full sticky top-0`}
      >
        <div className="container  mx-auto flex items-center justify-around py-2">
          <a href="/" aria-label="home" className="flex items-center h-8">
            <img src="/images/logo.png" alt="GD Wear Logo" className="h-8" />
            <span className="text-3xl">CleverBooks</span>
          </a>
          <div className="flex items-center md:hidden">
            <button onClick={MobileButton} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-black"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav id="main-menu" className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="text-medium">Product</button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
                <a href="/product" className="block px-4 py-2 text-black">
                  Product Home
                </a>
                <a href="/product/helix" className="block px-4 py-2 text-black">
                  HELIX: Workflow Automation
                </a>
                <a
                  href="/product/demand-forecasting"
                  className="block px-4 py-2 text-black"
                >
                  Accurate Demand Forecasting
                </a>
                <a
                  href="/product/purchase-planning"
                  className="block px-4 py-2 text-black"
                >
                  Automated Purchase Planning
                </a>
                <a
                  href="/product/automated-distribution-planning"
                  className="block px-4 py-2 text-black"
                >
                  Automated Distribution Planning
                </a>
                <a
                  href="/product/integrations"
                  className="block px-4 py-2 text-black"
                >
                  Integrations
                </a>
                <a
                  href="/product/custom-dashboards"
                  className="block px-4 py-2 text-black"
                >
                  Custom Dashboards
                </a>
                <a
                  href="/product/consensus-planning"
                  className="block px-4 py-2 text-black"
                >
                  Consensus Planning
                </a>
              </div>
            </div>
            <a href="/pricing" className="text-medium">
              Pricing
            </a>
            <div className="relative group">
              <button className="text-medium">Industry</button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
                <a
                  href="/industry/beauty-and-personal-care"
                  className="block px-4 py-2 text-black"
                >
                  Beauty and Personal Care
                </a>
                <a
                  href="/industry/quick-service-restaurants"
                  className="block px-4 py-2 text-black"
                >
                  Quick Service Restaurants
                </a>
                <a
                  href="/industry/food-and-beverages"
                  className="block px-4 py-2 text-black"
                >
                  Food and Beverages
                </a>
                <a
                  href="/industry/apparel-and-accessories"
                  className="block px-4 py-2 text-black"
                >
                  Apparel and Accessories
                </a>
                <a
                  href="/industry/pharma"
                  className="block px-4 py-2 text-black"
                >
                  Pharmaceuticals
                </a>
              </div>
            </div>
            <a href="/customer-stories" className="text-medium">
              Customer Stories
            </a>
            <a href="/about-us" className="text-medium">
              About
            </a>
            <a href="/blog" className="text-medium">
              Blog
            </a>
          </nav>
          <div className="hidden md:flex  space-x-4">
            <a
              href="https://app.getcrest.ai/app/login"
              className=" relative py-2 text-pink-500 hover:text-white "
            >
              Login
            </a>
            <a
              href="https://meetings.hubspot.com/atlantikadas/crest-book-a-demo"
              target="_blank"
              className="btn-secondary text-white rounded-full"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
