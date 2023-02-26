import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
        <div className="rela">
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