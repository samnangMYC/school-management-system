import { MdOutlineArrowForwardIos } from "react-icons/md";
import React from 'react'
import ProfessorsTable from "./table/ProfessorTable";
import { Link } from "react-router-dom";

const AllProfessor = () => {
  return (
    <div className=' flex-col space-y-8'>
      {/* Todo And Path */}
      <section className='flex px-8 items-center justify-between h-16 rounded-sm bg-white'>
        <p className='text-purple-600 text-xl font-bold'>All Professor</p>
        
        <div className='flex items-center gap-3 opacity-65 text-[14px]'>
          <p>Professor</p>
          <MdOutlineArrowForwardIos />
          <p className="text-purple-600">All Professor</p>
        </div>
      </section>

     
      <section className=" bg-white rounded-sm">
        <div className="flex justify-between h-20 items-center px-8 ">
          <h1 className="text-xl font-bold">All Professors</h1>
          <Link to={"/add-professor"}>
            <button className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-sm text-white font-semibold">
              + Add new
            </button>
          </Link>
        
        </div>
    
      <div className="h-[1px] bg-gray-200"></div>

       {/* Table of any data */}
        <ProfessorsTable />

      </section>
      
    </div>
  )
}

export default AllProfessor
