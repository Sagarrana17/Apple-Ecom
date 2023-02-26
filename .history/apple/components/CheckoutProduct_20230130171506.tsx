import Image from "next/image";
import { urlFor } from "../sanity";
 
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
            <div>
                <h4>{items[0].title}</h4>
                <p>
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