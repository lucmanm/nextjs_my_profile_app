import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) =>  {

  return (
    <Link href="/">
      <Image src="https://res.cloudinary.com/dzdcszrob/image/upload/v1719872152/playground-images/logo/lb4vpkxpqsbbwi4prjtq.png" alt='Logo' width={54} height={50} priority />
    </Link>
  )

}


export default Logo