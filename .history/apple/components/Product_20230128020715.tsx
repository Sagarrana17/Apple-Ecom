import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";


interface Props {
  product: Product;
}

function Product({ product }: Props) {
  

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>

       
      </div>
    </div>
  );
}

export default Product;
