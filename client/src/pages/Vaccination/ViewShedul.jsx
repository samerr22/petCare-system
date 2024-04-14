import { useEffect, useState } from "react";



export default function DashUsers() {
 
  const [Cat, setcat] = useState([]);
 
  console.log("sameea", Cat);
  

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/vicca/getS`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setcat(data.Schdul);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  

 
 

      

     
  return (
    <div>
      

      <div className="h-[600px] relative">
        {" "}
        {/* Added relative class */}
         
         <div className="flex items-center justify-center">
        
        <div className="w-[1400px]  h-[500px] bg-blue-800 bg-opacity-80  mt-10 rounded-3xl">
          <div className="max-h-80 mt-4 overflow-y-auto">
            <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
             
                <>
                  <table className="w-full divide-y divide-gray-200 shadow-md">
                    <thead className="bg-black bg-opacity-20">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Catagorice
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Time
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
                                {cat.cetogr}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.time}
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
    </div>
  );
}
