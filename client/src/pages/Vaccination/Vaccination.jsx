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

      const res = await fetch("http://localhost:3000/api/vicca/createA", {
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
          
          
          <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center mb-56  gap-5">
        
          <Link to="/mangvac">
        <button className="bg-blue-800  w-20 h-10 text-white rounded-full">
         back
        </button>
        </Link>
        <div className="flex-1 ">

          <form className="flex flex-col mt-20 gap-4" onSubmit={handleSubmit}>
             
          <div>
            <h3 className="font-semibold text-slate-400 ml-1">Name</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Name"
                id="name"
                onChange={handlchange}
              />
            </div>
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Age</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Age"
                id="age"
                onChange={handlchange}
              />
            </div>


            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Cetogrice</h3>
            <select
          className="rounded-lg"
          id="size"
          onChange={handlchange}
        >
            <option value="">select</option>
          <option value="big">big</option>
          <option value="small">small</option>
          
        </select>
            </div>
            <div>
             <h3 className="font-semibold text-slate-400 ml-1">Date</h3>


             <select
          className="rounded-lg"
          id="date"
          onChange={handlchange}
        >
            <option value="">select</option>
          <option value="2024-06-20">2024-06-20</option>
          <option value="2024-06-20">2024-06-20</option>
          <option value="2024-06-20">2024-06-20</option>
        </select>
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
