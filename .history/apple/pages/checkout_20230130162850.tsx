import Head from "next/head"
import Header from "../components/Header"

function checkout() {

    const items = useSelector(select)
  return (
    <div>
        <Head>
            <title>Bag - Apple</title>
            <link rel="icon" href="https://rb.gy/vsvv2o"/>
        </Head>
        <Header/>
        
        <main>
            <div>
                <h1></h1>
            </div>
        </main>
    </div>
  )
}

export default checkout