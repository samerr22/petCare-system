import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


export default function Feedback() {
 

  const [Cat, setcat] = useState([]);
  const [Dog, setdog] = useState([]);
  const [showMore, setShowMore] = useState(false);
  console.log(Dog)

  console.log("arra", Cat);

  useEffect(() => {
    const fetchcat = async () => {
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

    fetchcat();
  }, []);


  useEffect(() => {
    const fetchcat = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/adop/getdog`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setdog(data.Dog);
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
        <div className="flex justify-center items-center">
          
           <h1 className="text-xl font-serif  mt-6">Cat Profile </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {Cat && Cat.length > 0 ? (
              <>
                {Cat.slice(0, showMore ? Cat.length : 5).map((cat) => (
                  <div
                    key={cat._id}
                    className="w-[300px] h-[250px]  mt-10 mb-40 rounded  shadow-lg shadow-black "
                  >
                    <div className="px-6 py-4">
                      <div className="flex justify-center items-center mt-5">
                      <img
                      src={cat.image}
                      className="w-44 h-20 object-cover "
                    />

                      </div>
                    
                    <div className="flex justify-center items-center mt-3">
                    <div className="font-extralight text-xl mb-2 max-w-[200px]  break-words">
                        {cat.name}
                      </div>

                    </div>
                      
                       <div className="flex items-center justify-center ">
                       <p className="text-gray-700 whitespace-nowrap text-base">Color:{cat.color}</p>

                       </div>

                       
                       <div className="flex items-center justify-center">
                       <div className="text-gray-700  whitespace-nowrap">
                        Age:{cat.age}
                      </div>

                       </div>

                      <div className="flex justify-center items-center mt-2">
                      <Link
                      to={`/submitCat/${cat._id}`}
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

                {!showMore && Cat.length > 5 && (
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


      <div className="mt-[-100px]">
        <div className="flex justify-center items-center">
          
           <h1 className="text-xl font-serif ">Dog Profile </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {Dog && Dog.length > 0 ? (
              <>
                {Dog.slice(0, showMore ? Dog.length : 5).map((cat) => (
                  <div
                    key={cat._id}
                    className="w-[300px] h-[250px]  mt-10 mb-40 rounded  shadow-lg shadow-black "
                  >
                    <div className="px-6 py-4">
                      <div className="flex justify-center items-center">
                      <img
                      src={cat.image}
                      className="w-44 h-20 object-cover "
                    />

                      </div>
                      
                      <div className="flex justify-center items-center mt-2">
                      <div className="font-extralight text-xl mb-2 max-w-[200px] break-words">
                        {cat.name}
                      </div>

                      </div>

                      <div className="flex justify-center items-center ">
                      <p className="text-gray-700 whitespace-nowrap text-base">Color:{cat.color}</p>
                      </div>
              
                   
                      
                       <div className="flex justify-center items-center">
                       <div className="text-gray-700  whitespace-nowrap break-words">
                        Age:{cat.age}
                      </div>

                       </div>

                     <div className="flex justify-center items-center mt-2">

                     <Link
                      to={`/SubmitDogform/${cat._id}`}
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

                {!showMore && Dog.length > 5 && (
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
