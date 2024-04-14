import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function Feedback() {
 

  const [Event, setevent] = useState([]);
 
  const [showMore, setShowMore] = useState(false);
 

  

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


  

  

  

  return (
    <div>
     
      <div>
        <div className="flex justify-center items-center">
          
           <h1 className="text-xl font-serif ">All Event </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {Event && Event.length > 0 ? (
              <>
                {Event.slice(0, showMore ? Event.length : 3).map((cat) => (
                  <div
                    key={cat._id}
                    className="w-[450px] h-[400px]  mt-10 mb-40 rounded  shadow-xl "
                  >
                    
                    <div className="px-6 py-4">

                      <div className="flex justify-center items-center mt-2">
                      <img
                      src={cat.image}
                      className="w-44 h-20 object-cover "
                    />

                      </div>
                        
                        <div className="flex justify-center items-center ">
                        <div className="font-extralight text-xl mb-2 max-w-[200px] break-words">
                        {cat.title}
                      </div>

                        </div>

                        <div className="flex justify-center items-center">
                        <div className="text-gray-700 max-w-[250px] break-words text-base">{cat.desc}</div>
                        </div>
                     
                      

                       <div className="flex items-center justify-center">
                       <Link
                      to={`/Event/${cat._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      <button className="bg-blue-800 w-20 hover:opacity-90 rounded-lg text-white ">
                     Add 
                      </button>
                    
                    </Link>

                       </div>
                      

                      
                    </div>
                  </div>
                ))}

                {!showMore && Event.length > 3 && (
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
