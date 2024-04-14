import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";




export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  
  
  const navigate = useNavigate();
  console.log(formData)
  const {schdulId} = useParams();

  useEffect(() => {
    try {
      const fetchouse = async () => {
        const res = await fetch(
          `http://localhost:3000/api/vicca/getS?FeedId=${schdulId}`
        );
        const data = await res.json();
        console.log("data", data);

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selected = data.Schdul.find(
            (dog) => dog._id === schdulId
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
  }, [schdulId]);



  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/vicca/updates/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }

      if (res.ok) {
        setErrorMessage(null);
        navigate(``);
        alert("successfull")
      }
    } catch (error) {
        setErrorMessage("Something went wrong");
    }
  };

  

  return (
    <div className="">
           <div className="flex justify-center items-center mt-8">
           <h1 className="text-xl font-serif">Update Sechdul</h1>
           </div>
       

          <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center mb-56  gap-5">
        
          <Link to="/manageappoi">
        <button>
         back
        </button>
        </Link>
        <div className="flex-1 ">

          <form className="flex flex-col mt-20 gap-4" onSubmit={handleSubmit}>
             
          


            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Cetogrice</h3>
            <select
          className="rounded-lg"
          id="cetogr"
          onChange={handlchange}
          value={formData.cetogr}
        >
            <option value="">select</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          
        </select>
            </div>
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Phone Number</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Date"
                id="date"
                maxLength={8}
                onChange={handlchange}
                value={formData.date}
              />
            </div>
             
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Time</h3>
            <select
          className="rounded-lg"
          id="time"
          onChange={handlchange}
          value={formData.time}
        >
            <option value="">select</option>
          <option value="8pm-10pm">8pm-10pm</option>
          <option value="8pm-10pm">6pm-8pm</option>
          <option value="8pm-10pm">7pm-8pm</option>
          <option value="8pm-10pm">4pm-5pm</option>
          <option value="8pm-10pm">4pm-5pm</option>
          <option value="8pm-10pm">4pm-5pm</option>
          <option value="8pm-10pm">4pm-5pm</option>
          <option value="8pm-10pm">4pm-5pm</option>
        </select>
            </div>
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Phone Number</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Phone"
                id="phone"
                onChange={handlchange}
                value={formData.phone}
              />
            </div>
            <button
              className=" bg-blue-700 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
              type="submit"
             
            >
              submit
            </button>
           
          </form>
          
          {errorMessage && (
            <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center " >
              {errorMessage}
            </p>
          )}
        </div>
      </div>

        
      
    </div>
  );
}

