import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
 
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(formData)

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

        const Feedadd = {
            currentuserId: currentUser._id,
            ...formData,
           
          }

     
     
      setErrorMessage(null);

      const res = await fetch("http://localhost:3000/api/vicca/createS", {
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
        alert("successfull");
      }
    } catch (error) {
      setErrorMessage(error.message);
      
    }
  };

  return (
    <div className="">
           <div className="flex justify-center items-center mt-8">
           <h1 className="text-xl font-serif">Create Sechdul</h1>
           </div>
       

          <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center mb-56  gap-5">
        
          <Link to="/manageappoi">
        <button className="bg-blue-600 rounded-full text-white text-xl w-20 h-10">
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
              />
            </div>
             
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Time</h3>
            <select
          className="rounded-lg"
          id="time"
          onChange={handlchange}
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

