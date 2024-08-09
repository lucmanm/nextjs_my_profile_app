import React from 'react'

export default function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
