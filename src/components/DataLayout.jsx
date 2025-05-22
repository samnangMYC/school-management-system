import React from 'react'
import { HiMiniUserCircle } from "react-icons/hi2";

const DataLayoutPage = () => {
  return (
    <div>
        {/* Student Card Section */}
        <section className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>

            <div className='col-span-1 h-38 flex justify-start pl-7 items-center gap-4 rounded-lg bg-purple-600 '>
               
                <HiMiniUserCircle size={70} />
                <div className='text-white flex-col gap-4 '>
                    <h1 className='font-bold uppercase'>Total Student</h1>
                    <span className='font-bold text-2xl'>4999</span>
                    <p className='text-sm'>20% increase today</p>   
                </div>
            </div>
            <div className='col-span-1 h-38 flex justify-start pl-7 items-center gap-4 rounded-lg bg-yellow-500 '>
               
               <HiMiniUserCircle size={70} />
               <div className='text-white flex-col gap-4 '>
                   <h1 className='font-bold uppercase'>New Student</h1>
                   <span className='font-bold text-2xl'>4999</span>
                   <p className='text-sm'>20% increase today</p>   
               </div>
           </div>
           <div className='col-span-1 h-38 flex justify-start pl-7 items-center gap-4 rounded-lg bg-purple-800 '>
               
               <HiMiniUserCircle size={70} />
               <div className='text-white flex-col gap-4 '>
                   <h1 className='font-bold uppercase'>Total Student</h1>
                   <span className='font-bold text-2xl'>4999</span>
                   <p className='text-sm'>20% increase today</p>   
               </div>
           </div>
           <div className='col-span-1 h-38 flex justify-start pl-7 items-center gap-4 rounded-lg bg-red-600 '>
               
               <HiMiniUserCircle size={70} />
               <div className='text-white flex-col gap-4 '>
                   <h1 className='font-bold uppercase'>Total Student</h1>
                   <span className='font-bold text-2xl'>4999</span>
                   <p className='text-sm'>20% increase today</p>   
               </div>
           </div>

           
        </section>
 
      
    </div>
  )
}

export default DataLayoutPage
