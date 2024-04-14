
  import { useEffect, useState } from "react";

  import "react-circular-progressbar/dist/styles.css";
  import { useNavigate, useParams } from "react-router-dom";
  import { useSelector } from "react-redux";
  
  export default function CreatePost() {
   


    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [publishError, setPublishError] = useState(null);
    console.log(formData);
    const {formId} = useParams();
    const { currentUser } = useSelector((state) => state.user);

      
    useEffect(() => {
        try {
          const fetchouse = async () => {
            const res = await fetch(
              `http://localhost:3000/api/adop/getdog?FeedId=${formId}`
            );
            const data = await res.json();
            console.log("data", data);
    
            if (!res.ok) {
              console.log(data.message);
              setPublishError(data.message);
              return;
            }
            if (res.ok) {
              const selected = data.Dog.find(
                (dog) => dog._id === formId
              );
              if (selected) {
                setFormData(selected);
              }
            }
          };
          fetchouse();
        } catch (error) {
          console.log(error.message);
        }
      }, [formId]);




  
    const navigate = useNavigate();
  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
     
  
      try {
  
  
  
        const Feedadd = {
          currentuserId: currentUser._id,
          ...formData,
         
        }
       
        setErrorMessage(null);
  
        const res = await fetch("http://localhost:3000/api/adop/createf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Feedadd),
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
       
        if(res.ok){
          navigate('');
          alert("successfull")
        }
      } catch (error) {
        setErrorMessage(error.message);
        
      }
    };
    return (
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">
         Dog Form
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <div className="">
           
            
          </div>
          
          {formData.image && (
          <div className="flex justify-center items-center">
            <img
              src={formData.image}
              alt="upload"
              className="w-[300px] h-[200px] bject-cover"
            />
            </div>
          )}

<div className="flex justify-center items-center ml-28 gap-4">
     <div>
     <h3 className="font-semibold text-slate-400 ml-1">Name</h3>
     <input
             disabled
              type="text"
              placeholder="Name"
              required
              className="border-none"
              id="name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
            />

     </div>
           <div>
           <h3 className="font-semibold text-slate-400 ml-1">Color</h3>
           <input
              type="text"
              placeholder="Color"
              required
              className="border-none"
              id="color"
           disabled
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              value={formData.color}
            />

           </div>
            
          </div>
  
          <div className="flex justify-center items-center ml-36 gap-4">
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Age</h3>
            <input
              type="text"
              placeholder="Age"
              required
              id="age"
              className="border-none"
              disabled
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              value={formData.age}
            />

            </div>
             
             <div>
             <h3 className="font-semibold text-slate-400 ml-1">Size</h3>
             <select
            
            onChange={(e) =>
              setFormData({ ...formData, size: e.target.value })
            }
            value={formData.size}
            disabled
            className="border-none"

          >
            <option value="big">big</option>
            <option value="small">small</option>
          </select>
             </div>
            
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Price</h3>
            <input
              type="text"
              placeholder="Price"
              required
              id="price"
                className="border-none"
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              value={formData.price}
              disabled
            />

            </div>
          
  
            
          </div>
           
           <div className="flex justify-center items-center mt-2">
           <input
              type="text"
              placeholder="Name"
              required
              id="Name"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
             
            />

           </div>
           
           <div className="flex items-center justify-center mt-2">
            <input
              type="text"
              placeholder="Address"
              required
              id="Address"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
             
            />
            </div>
            <div className="flex justify-center items-center mt-2">
            <input
              type="text"
              placeholder="Contact"
              required
              id="contact"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              
            />
          
          </div>
          <button
            type="submit"
            className=" bg-blue-700 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90 lg:w-full"
          >
           Submit
          </button>
          {publishError && (
            <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center ">
              {publishError}
            </p>
          )}
          {errorMessage && (
            <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center ">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    );
  }
  