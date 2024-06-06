import React from "react";

function MainContent() {
  return (
    <>
      <div className="bg-gray-900   text-white min-h-screen flex items-center justify-center">
        <div className="w-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left text-center">
            <h1 className="text-5xl font-bold mb-4">
              Every order <br />{" "}
              <span className="text-pink-500">fulfilled,</span>{" "}
              <span className="text-purple-500">on time.</span>
            </h1>
            <p className="text-lg mb-8">
              Eliminate overstocking and under-stocking with CleverBooks. Built
              by supply-chain experts, it brings the same technology used by
              large global brands to power fast-growing startups. In short, we
              make supply meet demand, and then help you grow both.
            </p>
            <div className=" flex">
              <a
                href="#"
                fs-modal-element="open"
                tabIndex="0"
                data-w-id="74b8b29d-8a50-b7be-9bd2-3fa4b25106c3"
                className="btn-secondary bg-dark  py-1 px-3 rounded-3xl h-12"
                id="aZrruMAWzPo4GFSzzY7YH"
                role="button"
                aria-controls="DaES82Uoc-8IJdldXFuoj"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-roledescription="open-modal-trigger"
              >
                Get started with CleverBooks
              </a>
              <img src="/images/thought.svg" alt="" className="pl-4" />
            </div>
          </div>
        </div>
        <div>
          <img src="/images/person.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default MainContent;
