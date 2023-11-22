import Image from 'next/image'
import React, { FC } from 'react'

type DevImageProps={
  containerStyles: string
  imgSrc: string
}

const DivImg : FC<DevImageProps>= ({containerStyles,imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt=''/>
    </div>
  )
}

export default DivImg