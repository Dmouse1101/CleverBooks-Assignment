import React from "react";
import FooterBlog from "./FooterBlog";
function Footer() {
  return (
    <>
      <footer className=" bg-black">
        <FooterBlog />
        <div className="text-white py-16">
          <div className="container">
            <div className=" flex flex-wrap justify-evenly text-center space-y-16">
              <div className="pl-5 flex flex-col space-y-10 w-1/4">
                <a href="/" aria-current="page" className=" flex">
                  <img
                    src="/images/logo.png"
                    alt="CleverBooks"
                    className="h-8"
                  />
                  <span className="text-3xl">CleverBooks</span>
                </a>
                <p className="text-medium m-0">
                  Crest is an AI-powered supply chain software that provides
                  companies tools for demand forecasting, inventory planning and
                  more. This helps them have the right amount of stock, optimize
                  space and fulfill every order.
                </p>
              </div>
              <div className="w-1/4">
                <div className="text-medium-bold">Explore</div>
                <a
                  href="/product"
                  className="text-medium text-white-light block"
                >
                  Product
                </a>
                <a
                  href="/pricing"
                  className="text-medium text-white-light block"
                >
                  Pricing
                </a>
                <a
                  href="/customer-stories"
                  className="text-medium text-white-light block"
                >
                  Customer Stories
                </a>
                <a
                  href="https://jobs.gohire.io/crest-4g9epqum/"
                  className="text-medium text-white-light block"
                >
                  Career
                </a>
              </div>
              <div className="w-1/4">
                <div className="text-medium-bold">Learn</div>
                <a
                  href="/about-us"
                  className="text-medium text-white-light block"
                >
                  About us
                </a>
                <a href="/blog" className="text-medium text-white-light block">
                  Blog
                </a>
              </div>
              <div className="w-1/4">
                <div className="text-medium-bold">Contact Crest</div>
                <a
                  href="mailto:support@getcrest.ai"
                  className="text-medium text-white-light block"
                >
                  sales@getcrest.ai
                </a>
                <a
                  href="https://goo.gl/maps/yRWVGbr5v6A8bgiw7"
                  target="_blank"
                  className="text-medium text-white-light block"
                >
                  Registered Office:
                  <br />
                  1507, Incubex, 11th cross road, 19th Main Road, Bengaluru,
                  India. 560102
                </a>
                <a
                  href="https://maps.app.goo.gl/Vz2jA9K9g1WxVg3D8?g_st=iw"
                  target="_blank"
                  className="text-medium text-white-light block"
                >
                  Corporate Office:
                  <br />
                  291, All Time Space, 4th Floor,
                  <br />
                  15th A Cross, Sector - 6,
                  <br />
                  HSR Layout, Bengaluru,
                  <br />
                  India. 560102
                </a>
              </div>
            </div>
            <div className="border-t border-white-light mt-16 pt-10 flex justify-between">
              <div className="text-white-light text-xs">
                &copy; 2023 Crest. All Rights Reserved.
              </div>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="text-white-light text-xs">
                  Privacy Policy
                </a>
                <a
                  href="/terms-conditions"
                  className="text-white-light text-xs"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
