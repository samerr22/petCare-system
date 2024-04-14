import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dash from "../../components/sideDash"
import jsPDF from "jspdf";


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [Dog, setdog] = useState([]);
  const [dogdelete, setdogToDelete] = useState("");
  console.log("sameea", Dog);
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/vicca/getS`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setdog(data.Schdul);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  const handleDeletecat = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/vicca/deletes/${dogdelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setdog((prev) => prev.filter((dog) => dog._id !== dogdelete));
        alert("successfull")
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };



  //search funtion
  useEffect(() => {
    if (query.trim() === "") {
      // If the query is empty, display all data
      setfilter([...Dog]);
    } else {
      // If there's a query, filter the data
      const filteredData = Dog.filter(
        (dog) =>
        dog.cetogr &&  dog.cetogr.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Dog]);


  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 10;

    // Add house details to PDF
    doc.setFontSize(16);
    doc.text(20, yPos, "Schedul Details:");
    yPos += 10;

    Dog.forEach((dog) => {
      doc.setFontSize(12);
      doc.text(20, yPos, `Name: ${dog.cetogr}`);
      doc.text(20, yPos + 5, `Date: ${dog.date}`);
      doc.text(20, yPos + 10, `Time: ${dog.time}`);
      doc.text(20, yPos + 15, `Phone: ${dog.phone}`);
     
      yPos += 30;
    });

    // Save the PDF
    doc.save("Schdul_all.pdf");
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
      <div className="flex items-center justify-center mt-2 ">
      <h1 className="text-xl font-serif ">Manaage schedul </h1>
      </div>
     

      <div className="flex mt-4 justify-center items-center gap-5">
        <Link to="/schdul">
        <button className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full">
          add schedul
        </button>
        </Link>
        <button
                  className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full"
                  type="button"
                  onClick={() => generatePDF()}
                  
                >
                  Generate Report
                </button>
        
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
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
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
                  <td className="px-6 py-4 whitespace-nowrap">{dog.cetogr}</td>

                  
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dog.phone}
                  </td>
                  

                  <td className="px-6 py-4 whitespace-nowrap">


                    
                    <Link
                      to={`/Updateschdul/${dog._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>

                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      onClick={() => {
                        setdogToDelete(dog._id);
                        handleDeletecat();
                      }}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
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
