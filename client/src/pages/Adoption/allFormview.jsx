import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Dash from "../../components/sideDash"



export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [Dog, setdog] = useState([]);
 
  console.log("sameea", Dog);
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");
  const [status, setstat] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/adop/getform`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setdog(data.Form);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  



  //search funtion
  useEffect(() => {
    if (query.trim() === "") {
      // If the query is empty, display all data
      setfilter([...Dog]);
    } else {
      // If there's a query, filter the data
      const filteredData = Dog.filter(
        (dog) =>
        dog.age &&  dog.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Dog]);


  const handleStatusChange = async (FormId, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "Processing" ? "Approval" : "Processing";
      const res = await fetch(`http://localhost:3000/api/adop/adopp/${FormId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setstat(
            status.map((dog) => {
            if (dog._id === FormId) {
              return { ...dog, status: newStatus };
            }
            return dog;
          })
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    

    <div className="flex relative">
     
     <div>
     <Dash/>
     </div>
  

    <div className="h-[600px] relative"> {/* Added relative class */}
       
        
            <div className="ml-8  flex justify-center items-center">
        <form>
          <input
            type="text"
            placeholder="Search... "
            className=" w-[300px] h-8 mt-6 rounded-lg shadow-xl"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="flex justify-center items-center mt-5 font-serif text-xl">
        <h1>Profile Form Manegment</h1>
      </div>
        

        
        <div className="w-[1200px]  h-[400px] bg-blue-800 ml-10 mt-10 rounded-3xl">
        <div className="max-h-80 mt-4 overflow-y-auto">
        <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.shelterowner ? (
        <>
          <table className="w-full divide-y divide-gray-200 shadow-md">
            <thead className="bg-black bg-opacity-20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
               name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  color
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
             price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
             Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">

            {filter && filter.length > 0 ? (
              <>
              {filter.map((dog) => (
                <tr
                  key={dog._id}
                  className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{dog.name}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={dog.image}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.color}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.price}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">


                    
                    {dog.Name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">


                    
{dog.email}
</td>
<td className="px-6 py-4 whitespace-nowrap">


                    
                    {dog.contact}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() =>
                                  handleStatusChange(
                                    dog._id,
                                    dog.status
                                  )
                                }
                                className=" hover:underline w-24 h-8 rounded-lg hover:opacity-90 bg-blue-500 border border-white font-serif text-white"
                              >
                                {dog.status}
                              </button>
                            </td>
                </tr>
              ))}
              
              </>  ) : (
                        <p>You have no items yet</p>
                      )}
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

