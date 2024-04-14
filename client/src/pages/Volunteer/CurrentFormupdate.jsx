import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  
  const currentuserId = currentUser ? currentUser._id : null;
  const navigate = useNavigate();
  console.log(formData)
  const {updId} = useParams();


  useEffect(() => {
    try {
      const fetchouse = async () => {
        const res = await fetch(
          `http://localhost:3000/api/volunt/getfomn/${currentuserId}?FeedId=${updId}`
        );
        const data = await res.json();
        console.log("data", data);

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selected = data.Form.find(
            (cat) => cat._id === updId
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
  }, [updId]);

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/volunt/updateFormm/${formData._id}`, {
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
           <h1>Create Sechdul</h1>
           </div>
       

          <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center mb-56  gap-5">
        
          <Link to="/dashbord">
        <button>
         back
        </button>
        </Link>
        <div className="flex-1 ">

          <form className="flex flex-col mt-20 gap-4" onSubmit={handleSubmit}>
             
          


           
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Title</h3>
              <input
               className=" "
                type="text"
                placeholder="Date"
                id="title"
                disabled
                onChange={handlchange}
                value={formData.title}
              />
            </div>
             
           
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Location</h3>
              <input
               className=""
               disabled
                type="text"
                placeholder="Phone"
                id="location"
                onChange={handlchange}
                value={formData.location}
              />
            </div>
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Skill</h3>
              <textarea
               className=""
                type="text"
                placeholder="Skill"
                id="skill"
               disabled

                onChange={handlchange}
                value={formData.skill}
              />
            </div>

            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Name</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Phone"
                id="name"
                onChange={handlchange}
                value={formData.name}
                
              />
            </div>

            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Email</h3>
              <input
               className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Phone"
                id="email"
                onChange={handlchange}
                value={formData.email}
               
              />
            </div>

            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Phone</h3>
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

