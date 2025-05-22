import React from 'react'
import { ThreeDot } from 'react-loading-indicators'

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <ThreeDot variant="bob" color="#800080" size="medium" text="" textColor="" />
    </div>
    
  )
}

export default PageLoader
