import Head from "next/head";
import Link from "next/link";
import Image from "next/Image"



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
      <main>
        <section>
        <Link href="/">
            <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image
                src="https://rb.gy/vsvv2o"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default success