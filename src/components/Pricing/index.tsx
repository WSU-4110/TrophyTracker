"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

// Singleton for managing product fetching
class ProductFetcher {
  static instance = null;

  // Method to get the Singleton instance
  static getInstance() {
    if (!ProductFetcher.instance) {
      ProductFetcher.instance = new ProductFetcher();
    }
    return ProductFetcher.instance;
  }

  async fetchProducts() {
    try {
      // Replace with actual API call
      const { data } = await axios.get("/api/products");
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  }
}

const Pricing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetcher = ProductFetcher.getInstance();
    const fetchProducts = async () => {
      const data = await fetcher.fetchProducts();
      setProducts(data);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchProducts();
  }, []);

  return (
    <section
      id="pricing"
      className="dark:bg-dark relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {products.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
