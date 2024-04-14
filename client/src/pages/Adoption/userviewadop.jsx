import { useEffect, useState } from "react";



export default function DashUsers() {
 
  const [Dog, setdog] = useState([]);

  console.log("sameea", Dog);
  

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/adop/getform`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setdog(data.Form);
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
        <div className="flex items-center justify-center mt-2 ">
          <h1 className="text-xl font-serif mt-2">All Detials File Form</h1>
        </div>
        <div className="w-full  h-[500px] bg-blue-700 bg-opacity-50  mt-5 rounded-3xl">
          <div className="max-h-[500px] mt-4 overflow-y-auto">
            <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
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
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                     Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                     Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                     Status
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {Dog.map((dog) => (
                    <tr
                      key={dog._id}
                      className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {dog.name}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={dog.image}
                          className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {dog.color}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{dog.age}</td>
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
                        <h1 className="font-serif text-white">
                          {dog.status}
                        </h1>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
