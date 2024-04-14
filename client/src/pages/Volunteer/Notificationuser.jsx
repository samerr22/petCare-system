import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function Feedback() {
 

  const [Cat, setcat] = useState([]);
 
  const [showMore, setShowMore] = useState(false);
  

  console.log("arra", Cat);

  useEffect(() => {
    const fetchcat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/volunt/getN`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setcat(data.notifi);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchcat();
  }, []);


  

  

  

  return (
    <div>
     
      <div>
        <div className="flex justify-center gap-10 items-center">
          
           <h1 className="text-xl font-serif mt-4">Notification Detials </h1>

           <Link to="/getCurrent">
           <button className="bg-blue-800 w-48 rounded-lg text-white hover:opacity-50 mt-4 whitespace-nowrap">view my form</button>
           </Link> 
           

        </div>


        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {Cat && Cat.length > 0 ? (
              <>
                {Cat.slice(0, showMore ? Cat.length : 2).map((cat) => (
                  <div
                    key={cat._id}
                    className="w-[450px] h-[400px]  mt-10 mb-40 rounded  shadow-xl "
                  >
                    <div className="px-6 py-4">
                   
                       <div className="flex justify-center items-center">
                       <div className="font-extralight text-xl mb-2 max-w-[200px] mt-4 break-words">
                        {cat.title}
                      </div>

                       </div>
                       
                       <div className="flex justify-center items-center mt-2">
                       <p className="text-gray-700 whitespace-nowrap text-base"> Color:{cat.color}</p>
                       </div>
                      

                             <div className="flex justify-center items-center">
                             <div className="text-gray-700  max-w-[200px] whitespace-nowrap break-words">
                        Location:{cat.location}
                      </div>
                             </div>
                       <div className="flex justify-center items-center ">
                       <div className="text-gray-700 whitespace-nowrap max-w-[200px] break-words">
                        Skill:{cat.skill}
                      </div>

                       </div>
                      
                      <div className="flex justify-center items-center">
                      <Link
                      to={`/submit/${cat._id}`}
                      className="text-teal-500 hover:underline"
                    >
                      <button className="bg-blue-800 w-48 mt-2 rounded-lg text-white">
                Sumbit
                      </button>
                   
                    </Link>

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

