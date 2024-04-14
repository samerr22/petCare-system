import { useEffect, useState } from "react";

import Dash from "../../components/sideDash";


export default function DashUsers() {
 
  const [Cat, setcat] = useState([]);
  
  console.log("sameea", Cat);
  

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/volunt/getform`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setcat(data.notif);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  

 
 

      

     
  return (
    <div className="relative flex">
        
      <div>  <Dash/></div> 

      <div className="h-[600px] relative">
        {" "}
        {/* Added relative class */}
        <div className="flex justify-center items-center mt-6"> <h1 className="flex font-serif text-xl">Notification  Form Submit Details</h1></div>
        
        
        <div className="w-[1200px]  h-[450px] bg-blue-800 ml-16 mt-8 rounded-3xl">
          <div className="max-h-80 mt-4 overflow-y-auto">
            <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
             
                <>
                  <table className="w-full divide-y divide-gray-200 shadow-md">
                    <thead className="bg-blue-800 bg-opacity-20">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                       Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Skill
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                         Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                         Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                         Phone
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                      
                          {Cat.map((cat) => (
                            <tr
                              key={cat._id}
                              className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.title}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.location}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.skill}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.phone}
                              </td>
                             

                              
                            </tr>
                          ))}
                        
                    </tbody>
                  </table>
                </>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
