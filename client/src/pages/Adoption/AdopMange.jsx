import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dash from "../../components/sideDash"
import jsPDF from "jspdf";


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [Cat, setcat] = useState([]);
  const [catdelete, setcatToDelete] = useState("");
  console.log("sameea", Cat);
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/adop/getcat`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setcat(data.Cat);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCat();
  }, []);

  const handleDeletecat = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/adop/deletec/${catdelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setcat((prev) => prev.filter((cat) => cat._id !== catdelete));
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
      setfilter([...Cat]);
    } else {
      // If there's a query, filter the data
      const filteredData = Cat.filter(
        (cat) =>
        cat.age &&  cat.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Cat]);


  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 10;

    // Add house details to PDF
    doc.setFontSize(16);
    doc.text(20, yPos, "Cat profile Details:");
    yPos += 10;

    Cat.forEach((cat) => {
      doc.setFontSize(12);
      doc.text(20, yPos, `Name: ${cat.name}`);
      doc.text(20, yPos + 5, `Color: ${cat.color}`);
      doc.text(20, yPos + 10, `Age: ${cat.age}`);
      doc.text(20, yPos + 15, `Size: ${cat.size}`);
      doc.text(20, yPos + 20, `Price: ${cat.price}`);
      yPos += 35;
    });

    // Save the PDF
    doc.save("cat_all.pdf");
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
      <h1 className="text-xl font-serif ">Cat profile Magnagemtn </h1>
      </div>
     

      <div className="flex mt-4 justify-center items-center gap-5">
        <Link to="/addcat">
        <button className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full">
          add Cat 
        </button>
        </Link>
        <button
                  className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full"
                  type="button"
                  onClick={() => generatePDF()}
                  
                >
                  Generate Report
          
          
                </button>
                <Link to="/dogmange">
        <button className="hidden sm:inline  hover:underline bg-yellow-300 hover:opacity-55 text-black font-bold py-2 px-4  rounded-full">
          manage dog
        </button>
        </Link>
      </div>
        

        
        <div className="w-[1200px]  h-[400px] bg-blue-800 ml-10  mt-10 rounded-3xl">
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
              {filter.map((cat) => (
                <tr
                  key={cat._id}
                  className="bg-black bg-opacity-50 text-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={cat.image}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cat.color}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cat.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cat.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cat.price}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">


                    
                    <Link
                      to={`/updatecat/${cat._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>

                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      onClick={() => {
                        setcatToDelete(cat._id);
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
