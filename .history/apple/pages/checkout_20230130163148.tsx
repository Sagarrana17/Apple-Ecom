import Head from "next/head"
import Header from "../components/Header"
import { selectBasketItems } from "../redux/basketSlice"
import { useSelector} from "react-redux"

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
                <h1>
                    {items.length > 0 ? "Review your bag." : "Your bag is empty."}
                </h1>
                <p className="my-4">Free de</p>
            </div>
        </main>
    </div>
  )
}

export default checkout