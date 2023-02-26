import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple : by Sagar Rana</title>
        <link rel="icon" href="https://rb.gy/vsvv2o" />
      </Head>

      <Header/>
    </div>
  )
}

export default Home
