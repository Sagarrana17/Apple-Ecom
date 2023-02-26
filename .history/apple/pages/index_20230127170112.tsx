import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div>
    
      <Head>
        <title>Apple</title>
        <link rel="icon" href="https://rb.gy/vsvv2o" />
      </Head>

      <Header/>

      <main className="relative ">
        <Landing/>
      </main>
    </div>
    
  )
}

export default Home
