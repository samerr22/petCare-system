
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Header() {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className="bg-blue-800 text-white">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/profile">
          <h1 className="font-bold ">pet</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/profile">
            <li>Home</li>
          </Link>
          
         

            {currentUser ? (

              <>
               <Link to="/dashbord" >
               <li>Dashbord</li>
               </Link>
               <Link to="/userview" >
               <li>adopform</li>
               </Link>
               <Link to="/Viewevent" >
               <li>Event</li>
               </Link>
               <Link to="/viewschdul" >
               <li>Sechdul</li>
               </Link>
                
              
                <Link to="/Notifi" >
                <li>Notification</li>
                </Link>
           
               
               <Link to="/dash">
               <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
               </Link>
               </>
               )
           
            :(
              <Link to="/sign-in" >
              <li>Sing In</li>
              </Link>
            )}
            
            
        
        </ul>
      </div>
    </div>
  );
}