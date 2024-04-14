import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Feedback() {
  const { currentUser } = useSelector((state) => state.user);

  const [Cat, setcat] = useState([]);
 
  const [showMore, setShowMore] = useState(false);
  const [catdelete, setcatToDelete] = useState("");
 


  const currentuserId = currentUser ? currentUser._id : null;


  console.log("arra", Cat);

  useEffect(() => {
    const fetchcat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/volunt/getfomn/${currentuserId}`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setcat(data.Form);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchcat();
  }, []);


  const handleDeletecat = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/volunt/deletesNform/${catdelete}`, {
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

  

  

  

  return (
    <div>
     
      <div>
        <div className="flex justify-center items-center">
          
           <h1 className="text-xl font-serif mt-5">My Notification Detials </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {Cat && Cat.length > 0 ? (
              <>
                {Cat.slice(0, showMore ? Cat.length : 2).map((cat) => (
                  <div
                    key={cat._id}
                    className="w-[450px] h-[400px]  mt-10 mb-40 rounded  shadow-xl shadow-black "
                  >
                    <div className="px-6 py-4">
                   
                        <div className="flex justify-center items-center mt-2">
                      <div className="font-bold text-xl mb-2 max-w-[100px] break-words">
                        {cat.title}
                      </div>
                      </div>
                      <div className="flex justify-center items-center ">
                      <p className="text-gray-700 text-base">{cat.color}</p>
                      </div>
                     
                      <div className="flex justify-center items-center ">
                      <div className="text-gray-700  max-w-[200px] break-words">
                        {cat.location}
                      </div>
                      </div>
                      <div className="flex justify-center items-center ">
                      <div className="text-gray-700  max-w-[200px] break-words">
                        {cat.skill}
                      </div>
                      </div>
                      <div className="flex justify-center items-center ">
                      <div className="text-gray-700  max-w-[200px] break-words">
                        {cat.name}
                      </div>
                      </div>
                      <div className="flex justify-center items-center ">
                      <div className="text-gray-700  max-w-[200px] break-words">
                        {cat.email}
                      </div>
                      </div>
                      <div className="flex justify-center items-center ">
                      <div className="text-gray-700  max-w-[200px] break-words">
                        {cat.phone}
                        </div>
                      </div>
                   <div className="flex justify-center items-center gap-3 mt-4">
                   <Link
                      to={`/currentformup/${cat._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      Edit
                    </Link>

                    <span
                      onClick={() => {
                        setcatToDelete(cat._id);
                        handleDeletecat();
                      }}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>

                   </div>
                     

                      
                    </div>
                  </div>
                ))}

                {!showMore && Cat.length > 2&& (
                  <div className="mt-4 md:hidden sm:hidden lg:block mb-4 ml-[60px]">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                      onClick={() => setShowMore(true)}
                    >
                      Show More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p>You have no items yet</p>
            )}
          </div>
        </div>
      </div>


      
    </div>
  );
}

