
  import { useEffect, useState } from "react";
  import "react-circular-progressbar/dist/styles.css";
  import { useNavigate, useParams } from "react-router-dom";
  import { useSelector } from "react-redux";
  
  export default function CreatePost() {
    


    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [publishError, setPublishError] = useState(null);
    console.log(formData);
    const {formmId} = useParams();
    const { currentUser } = useSelector((state) => state.user);

      
    useEffect(() => {
        try {
          const fetchouse = async () => {
            const res = await fetch(
              `http://localhost:3000/api/event/getE?FeedId=${formmId}`
            );
            const data = await res.json();
            console.log("data", data);
    
            if (!res.ok) {
              console.log(data.message);
              setPublishError(data.message);
              return;
            }
            if (res.ok) {
              const selected = data.event.find(
                (dog) => dog._id === formmId
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
      }, [formmId]);




  
    const navigate = useNavigate();
  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
     
  
      try {
  
  
  
        const Feedadd = {
          currentuserId: currentUser._id,
          ...formData,
         
        }
       
        setErrorMessage(null);
  
        const res = await fetch("http://localhost:3000/api/event/createFE", {
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
        Event Attendence
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <div className="">
           
            
          </div>
         
          {formData.image && (
            <div className="flex justify-center items-cent ">
              <img
              src={formData.image}
              alt="upload"
              className="w-[300px] h-[200px] bject-cover"
            />

            </div>
            
          )}

<div className="flex justify-center items-center gap-6">
  <div>
  <h3 className="font-semibold text-slate-400 ml-1">Title</h3>
  <input
             disabled
              type="text"
              placeholder="Name"
              className="border-none"
              required
              id="title"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              value={formData.title}
            />

  </div>
          <div>
          <h3 className="font-semibold text-slate-400 ml-1">Description</h3>
          <input
              type="text"
              className="max-w-24 truncate border-none"
              placeholder="Color"
              required
              id="desc"
           disabled
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
              value={formData.desc}
            />
            
            </div>  
            
          </div>
  
          
              <div className="flex justify-center items-center mt-2">
              <input
              type="text"
              placeholder="Name"
              required
              id="name"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
             
            />

              </div>
            <div className="flex justify-center items-center mt-2">
            <input
              type="text"
              placeholder="Email"
              required
              id="email"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             
            />

            </div>
            
            <div className="flex justify-center items-center mt-2">
            <input
              type="text"
              placeholder="Phone"
              required
              id="phone"
              className="flex-1 bg-slate-100 p-3 rounded-lg w-[500px] h-11"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              
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
  