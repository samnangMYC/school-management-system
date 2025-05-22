
import { MdOutlineArrowForwardIos } from 'react-icons/md'


const AddProfessor = () => {

  return (
     <div className=' flex-col space-y-8'>
          {/* Todo And Path */}
          <section className='flex px-8 items-center justify-between h-16 rounded-sm bg-white'>
            <p className='text-purple-600 text-xl font-bold'>Add New Professor</p>
            
            <div className='flex items-center gap-3 opacity-65 text-[14px]'>
              <p>Professor</p>
              <MdOutlineArrowForwardIos />
              <p className="text-purple-600">Add Professor</p>
            </div>
          </section>
    
          {/* Table of any data */}
          <section className=" bg-white dark:bg-gray-700 rounded-sm">
            <div className="flex justify-between h-20 items-center px-8 ">
              <h1 className="text-xl font-bold">Basic info</h1>
            
            </div>
          {/* Line */}
          <div className="h-[1px] bg-gray-200"></div>

          <div className='px-8 mt-4 '>
             
        

          </div>

          </section>
          
        </div>
        
  )
}

export default AddProfessor;
