import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
        <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity">
        <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
        </div>
    </header>
  )
}

export default Header