import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { FC } from 'react'

type DevImageProps={
  className: string
  imgSrc: string
}

const DivImg : FC<DevImageProps>= ({className,imgSrc}) => {
  return (
    <div className={cn(className)}>
      <Image src={imgSrc} fill priority alt='' className='object-cover absolute bottom-16'/>
    </div>
  )
}

export default DivImg