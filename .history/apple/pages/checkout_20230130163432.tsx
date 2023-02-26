import Head from "next/head";
import Header from "../components/Header";
import { selectBasketItems } from "../redux/basketSlice";
import { useSelector} from "react-redux";
import Button from "../components/Button";

function checkout() {

    const items = useSelector(selectBasketItems)
  return (
    <div>
        <Head>
            <title>Bag - Apple</title>
            <link rel="icon" href="https://rb.gy/vsvv2o"/>
        </Head>
        <Header/>
        
        <main>
            <div>
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                    {items.length > 0 ? "Review your bag." : "Your bag is empty."}
                </h1>
                <p className="my-4">Free delivery and free returns.</p>

         {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
            </div>
        </main>
    </div>
  )
}

export default checkout