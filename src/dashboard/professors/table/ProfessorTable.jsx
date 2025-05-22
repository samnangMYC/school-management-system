import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    profile: '/images/profile-1.jpg',
    name: 'John Doe',
    department: 'Engineering',
    gender: 'Male',
    education: 'B.Tech',
    mobile: '+1 234 567 890',
    email: 'john.doe@example.com',
    joiningDate: '2023-08-15'
  },
  {
    id: 2,
    profile: '/images/profile-2.jpg',
    name: 'Jane Smith',
    department: 'Marketing',
    gender: 'Female',
    education: 'MBA',
    mobile: '+1 987 654 321',
    email: 'jane.smith@example.com',
    joiningDate: '2022-05-10'
  },
  {
    id: 3,
    profile: '/images/profile-3.jpg',
    name: 'Robert Brown',
    department: 'Finance',
    gender: 'Male',
    education: 'M.Com',
    mobile: '+1 555 444 3333',
    email: 'robert.brown@example.com',
    joiningDate: '2021-11-20'
  }
];

export default function ProfessorsTable() {
  return (
    <>
      {/* Table Section */}
      <section className="p-8 mt-2">
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
            </th>
            <th className="px-6 py-3">Profile</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Department</th>
            <th className="px-6 py-3">Gender</th>
            <th className="px-6 py-3">Education</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Joining Date</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
              </td>
              <td className="px-6 py-4">
                <img className="w-10 h-10 rounded-full" src={emp.profile} alt={`${emp.name}'s profile`} />
              </td>
              <td className="px-6 py-4">{emp.name}</td>
              <td className="px-6 py-4">{emp.department}</td>
              <td className="px-6 py-4">{emp.gender}</td>
              <td className="px-6 py-4">{emp.education}</td>
              <td className="px-6 py-4">{emp.mobile}</td>
              <td className="px-6 py-4">{emp.email}</td>
              <td className="px-6 py-4">{emp.joiningDate}</td>
              <td className="px-6 py-4">
               <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2">
                <MdOutlineModeEditOutline />
               </button>
               <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2">
                  <BsTrash3 />
               </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </section>
      
      

    
    </>
  );
}
