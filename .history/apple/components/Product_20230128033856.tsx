import React from 'react'
import Image from "next/image";
import { urlFor } from "../sanity";


interface Props{
    product: Product;
}
function Product({product}: Props) {
  return (
    <div>
        <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

    </div>
  )
}

export default Product