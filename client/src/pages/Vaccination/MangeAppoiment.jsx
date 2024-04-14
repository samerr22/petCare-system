import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dash from "../../components/sideDash";


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [Cat, setcat] = useState([]);
  
  console.log("sameea", Cat);
  const [filter, setfilter] = useState([]);

  const [status, setstat] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/vicca/getA`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setcat(data.appoiment);
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
      setfilter([...Cat]);
    } else {
      // If there's a query, filter the data
      const filteredData = Cat.filter(
        (cat) => cat.age && cat.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Cat]);

  const handleStatusChange = async (FormmId, currentStatus) => {
    try {
      let newStatus;
      switch (currentStatus) {
        case "processing":
          newStatus = "approval";
          break;
        case "approval":
          newStatus = "reject";
          break;
        case "reject":
          newStatus = "processing";
          break;
        default:
          newStatus = "processing"; // Default to "Processing" if status is not recognized
      }

      const res = await fetch(`http://localhost:3000/api/vicca/vacci/${FormmId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setstat(
          status.map((dog) => {
            if (dog._id === FormmId) {
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
      <Dash />
      </div>
     

      <div className="h-[600px] relative">
        {" "}
        {/* Added relative class */}
        <div className="flex items-center justify-center mt-2 ">
          <h1 className="flex text-xl font-serif">Appoinment profile </h1>
        </div>
        <div className="flex mt-4 justify-center items-center gap-5">
          <Link to="/schdul">
            <button  className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full">add sechdul</button>
          </Link>
        </div>
        <div className="w-[1200px]  h-[400px] bg-blue-800 ml-10 mt-10 rounded-3xl">
          <div className="max-h-80 mt-4 overflow-y-auto">
            <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
              {currentUser.vetdoctor ? (
                <>
                  <table className="w-full divide-y divide-gray-200 shadow-md">
                    <thead className="bg-black bg-opacity-20">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          age
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          phone
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                      {filter && filter.length > 0 ? (
                        <>
                          {filter.map((cat) => (
                            <tr
                              key={cat._id}
                              className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.name}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.age}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {cat.size}
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

                              <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                  onClick={() =>
                                    handleStatusChange(cat._id, cat.status)
                                  }
                                  className=" hover:underline w-24 h-8 rounded-lg hover:opacity-90 bg-blue-500 border border-white font-serif text-white"
                                >
                                  {cat.status}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
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
