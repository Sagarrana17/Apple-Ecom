import Image from "next/image";
import { urlFor } from "../sanity";
import { ChevronDownIcon } from "@heroicons/react/outline";

interface Props{
    items: Product[];
    id: string;
}
function CheckoutProduct({id,items}: Props) {
  return (
    <div>
        <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div>
        <div>
        <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
                <p className="flex items-end gap-x-1 font-semibold">
                    {items.length}
                    <ChevronDownIcon className="h-6 w-6" />
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct