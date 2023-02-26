import { ImageFormat } from "@sanity/image-url/lib/types/types";
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
    </div>
  )
}

export default CheckoutProduct