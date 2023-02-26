import Head from "next/head";
import Link from "next/link";
import Image from "next"



function success() {
  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="https://rb.gy/vsvv2o"/>
      </Head>
      <header>
      <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </header>
    </div>
  )
}

export default success