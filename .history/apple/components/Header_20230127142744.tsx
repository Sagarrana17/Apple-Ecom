import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex items-center justify">
      <Link href="/">
        <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
        <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
        </div>
        </Link>
      </div>
    </header>
  )
}

export default Header