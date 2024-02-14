/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import React from "react";
import OfferList from "./OfferList";

interface PricingBoxProps {
  price: unknown;
  purchaseLink: string;
  packageName: string;
  btn: string;
  popular?: boolean;
  subtitle: string;
  children: React.ReactNode;
}

const PricingBox = ({ product }: { product: any }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {} = product;

  // POST request
  const handleSubscription = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.nickname === "Premium" && (
          <p className="bg-primary absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
          {product.nickname}
        </span>
        <h2 className="text-dark mb-11 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "USD",
            })}
          </span>
          <span className="text-body-color dark:text-dark-6 text-base font-normal">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="text-dark mb-5 text-lg font-medium dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product.nickname === "Basic" && (
              <>
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
              </>
            )}
            {product.nickname === "Premium" && (
              <>
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
              </>
            )}
            {product.nickname === "Business" && (
              <>
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
                <OfferList text="TrophyTracker " />
              </>
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={handleSubscription}
            className="bg-primary hover:bg-primary/90 inline-block rounded-md px-7 py-3 text-center text-base font-medium text-white transition duration-300"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
