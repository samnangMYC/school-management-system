import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex-col'>
          <p className='text-3xl mb-8'>School Frontend </p>
          <Link to={"/dashboard"}>
            <Button className="bg-blue-500 px-2 py-4">
              Navigate To Dashboard
            </Button>
          </Link>
      </div>
      
    </div>
  )
}

export default HomePage
