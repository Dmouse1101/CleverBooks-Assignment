import React from "react";
import Card from "./Card";
function KeyProblem() {
  return (
    <>
      <section className="py-30">
        <div className="container mx-auto">
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold">
              Four key questions answered by CleverBooks
            </h3>
          </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Card
              url="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
              title="What to order"
              content="Get accurate demand and days to stock out. Automate purchase
                  planning so you can always have what you need for your next
                  sales cycle."
            />
            <Card
              url="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
              title="When to order"
              content="Have up-to-date inventory, storage, sales velocity, and
              demand. Get timely order suggestions so you're never left
              guessing."
            />
            <Card
              url="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
              title="How much to stock"
              content=" Get inventory requirements for every node, for every SKU. So
              you avoid out-of-stock situations, even during demand spikes."
            />
            <Card
              url="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
              title="Where to place"
              content=" Our tool suggests how to move stock within your supply chain.
              So you'll always have products available across cities."
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default KeyProblem;
