import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Dash from "../../components/sideDash"
;


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [event, setevent] = useState([]);
 
  console.log("sameea", event);
  

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/event/getFE`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setevent(data.Eventform);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  



  


  





  return (
    

    <div className="flex relative">
    
    <Dash/>

    <div className="h-[600px] relative"> {/* Added relative class */}
       
        
            <div className="ml-8  flex justify-center items-center">
        
      </div>
      <div className="flex items-center justify-center mt-2 ">
      <h1 className="font-serif text-xl ">all form </h1>
      </div>
     

     
        

        
        <div className="w-[1200px]  h-[400px] bg-blue-800 ml-10 mt-10 rounded-3xl">
        <div className="max-h-80 mt-4 overflow-y-auto">
        <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.eventmanger ? (
        <>
          <table className="w-full divide-y divide-gray-200 shadow-md">
            <thead className="bg-black bg-opacity-20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
               title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                phone
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">

            
           
              {event.map((dog) => (
                <tr
                  key={dog._id}
                  className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{dog.title}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={dog.image}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <h1 className=" w-48 break-words">{dog.name}</h1>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <h1 className=" w-48 break-words">{dog.email}</h1>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <h1 className=" w-48 break-words">{dog.phone}</h1>
                  </td>
                  

                  

                  
                  
                </tr>
              ))}
              
             
            </tbody>
          </table>
        </>
      ) : (
        <p>You have no users yet!</p>
      )}
    </div>
       </div>
    

        </div>
      </div>




     









    
    </div>
  );
}
