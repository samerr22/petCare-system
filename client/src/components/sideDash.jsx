

import { Link } from "react-router-dom";


import { useSelector } from "react-redux";

export default function DashSidebar() {
  
  const { currentUser } = useSelector((state) => state.user);

 



 



  return (
    <div className=" hidden flex-col flex-shrink-0 p-3 bg-blue-500  w-56 h-[600px]  lg:block">
      <ul className="flex flex-col space-y-1 mb-auto">
        {currentUser && currentUser.shelterowner && (
            <>
          
           <li className="nav-item">
           <Link to="/adoptionM" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             Adoption Managemet
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/allform" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 cursor-pointer text-white `}>
            
             profile from
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/mangvac" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 cursor-pointer text-white `}>
            Manger Vaccinaiton
             
           </Link>
         </li>
         </>
        )}

{currentUser && currentUser.eventmanger && (
            <>
         
           <li className="nav-item">
           <Link to="/manage" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             ManageEvent
           </Link>
         </li>
         <li className="nav-item">
           <Link to="/alleventform" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 cursor-pointer text-white `}>
            
             view attendance
           </Link>
         </li>
         </>
        )}
        {currentUser && currentUser.vetdoctor && (
            <>
          
           <li className="nav-item">
           <Link to="/manageappoi" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             Manage appoimnet
           </Link>
           
         </li>
         <li className="nav-item">
           <Link to="/Mangesechdul" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             Manage schdul
           </Link>
           </li>
         
         </>
        )}

{currentUser && currentUser.shelterAdministor && (
            <>
         
           <li className="nav-item">
           <Link to="/mangernotifi" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             Manage notifiForm
           </Link>
           
         </li>
         <li className="nav-item">
           <Link to="/veiwallfrom" className={`block py-2 px-4 rounded-lg hover:bg-gray-200 bg-opacity-60 text-white `}>
            
             view Notification form
           </Link>
           
         </li>
         
         
         </>
        )}
        
       
      </ul>
      <hr className="my-2 border-gray-300" />
      
    </div>
  );
}
