import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dash from "../../components/sideDash"
import jsPDF from "jspdf";


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [event, setevent] = useState([]);
  const [dogdelete, setdogToDelete] = useState("");
  console.log("sameea", event);
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/event/getE`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setevent(data.event);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  const handleDeletecat = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/event/deleteE/${dogdelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setevent((prev) => prev.filter((cat) => cat._id !== dogdelete));
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
      setfilter([...event]);
    } else {
      // If there's a query, filter the data
      const filteredData = event.filter(
        (dog) =>
        dog.age &&  dog.title.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, event]);


  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 10;

    // Add house details to PDF
    doc.setFontSize(16);
    doc.text(20, yPos, "Dog profile Details:");
    yPos += 10;

    event.forEach((dog) => {
      doc.setFontSize(12);
      doc.text(20, yPos, `Title: ${dog.title}`);
      doc.text(20, yPos + 5, `Description: ${dog.desc}`);
      
      yPos += 20;
    });

    // Save the PDF
    doc.save("Event_all.pdf");
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
      <h1 className="font-serif text-xl ">Manage Event</h1>
      </div>
     

      <div className="flex mt-4 justify-center items-center gap-5">
        <Link to="/addevent">
        <button  className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full">
          add Event
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
                  description
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
                  <td className="px-6 py-4 whitespace-nowrap">{dog.title}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={dog.image}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <h1 className=" w-48 break-words">{dog.desc}</h1>
                  </td>
                  

                  <td className="px-6 py-4 whitespace-nowrap">


                    
                    <Link
                      to={`/update/${dog._id}`}
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
