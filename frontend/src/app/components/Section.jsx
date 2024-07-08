"use client";
import { FaShoppingBasket } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Section() {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  return (
    <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products
        ? products.map((product) => (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <Link href="#">
                <img
                  src={product.url}
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    {product.name}
                  </span>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">
                        ${product.oldprice}
                      </p>
                    </del>
                    <div class="ml-auto">
                      <FaShoppingBasket className="relative text-2xl" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : "Loading products..."}
    </section>
  );
}

export default Section;
