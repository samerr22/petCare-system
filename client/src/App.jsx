import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Onlyevent from "./components/OnlyEventManger";
import ShelterOwner from "./components/OnlyShelterOwner";
import OnlyShelteradmin from "./components/OnlyShelteradmin";
import OnlyDoctor from "./components/OnlyDoctor";
import Dahshprfile from "./components/DashProfile";
import Adoptionm from "./pages/Adoption/AdopMange";
import Addcat from "./pages/Adoption/Addcat";
import Updatecat from "./pages/Adoption/updatecat";
import Dogmange from "./pages/Adoption/DognMange";
import Adddog from "./pages/Adoption/adddog";
import Profileview from "./pages/Adoption/profileview";
import Updatedog from "./pages/Adoption/UpdateDog";
import SubmitDogform from "./pages/Adoption/SubmitDogForm";
import Submitformcat from "./pages/Adoption/SubmitCatForm";
import Allform from "./pages/Adoption/allFormview";
import Userview from "./pages/Adoption/userviewadop";
import Mange from "./pages/Event/MangeEvent";
import Addevet from "./pages/Event/Addevent";
import Updatevet from "./pages/Event/UpdateEvent";
import Viewevent from "./pages/Event/ViewEvent";
import Eventfom from "./pages/Event/Eventform";
import AllEventform from "./pages/Event/Allformview";
import Vaccination from "./pages/Vaccination/Vaccination";
import MangVaccination from "./pages/Vaccination/MangeVaccination";
import Schedul from "./pages/Vaccination/Scheduladd";
import Mangeappoimet from "./pages/Vaccination/MangeAppoiment";
import Viewschdul from "./pages/Vaccination/ViewShedul";
import Doctersechdul from "./pages/Vaccination/DoctorshedulMang";
import Updateschdule from "./pages/Vaccination/Updatesechdul";
import CreateNotifi from "./pages/Volunteer/CreateNotifi";
import MangeNotifi from "./pages/Volunteer/MangeNotifi";
import Veiwall from "./pages/Volunteer/ViewAllformNotifi";
import Notification from "./pages/Volunteer/Notificationuser";
import Subform from "./pages/Volunteer/SubmitForm";
import Getcurrentform from "./pages/Volunteer/getCurrentform";
import Currentform from "./pages/Volunteer/CurrentFormupdate";
import Dashbord from "./pages/Dashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/profile" element={<Profileview />} />
          <Route path="/userview" element={<Userview />} />
          <Route path="/viewschdul" element={<Viewschdul />} />
          <Route path="/Notifi" element={<Notification />} />
          <Route path="/submit/:submitId" element={<Subform />} />
          <Route path="/getCurrent" element={<Getcurrentform />} />
          <Route path="/currentformup/:updId" element={<Currentform />} />
          <Route path="/Viewevent" element={<Viewevent />} />
        <Route path="/Event/:formmId" element={<Eventfom />} />
        <Route path="/dash" element={<Dahshprfile />} />
        <Route path="/submitCat/:formCatId" element={<Submitformcat />} />
        <Route path="/SubmitDogform/:formId" element={<SubmitDogform />} />

        </Route>

       



        <Route element={<ShelterOwner />}>
        <Route path="/adoptionM" element={<Adoptionm />} />
        <Route path="/addcat" element={<Addcat />} />
        <Route path="/dogmange" element={<Dogmange />} />
        <Route path="/adddog" element={<Adddog />} />
        <Route path="/updatecat/:catId" element={<Updatecat />} />
        <Route path="/updatedog/:dogId" element={<Updatedog />} />


        <Route path="/allform" element={<Allform />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/mangvac" element={<MangVaccination />} />

       

        
        </Route>

        <Route element={<Onlyevent />}>
        <Route path="/manage" element={<Mange />} />
        <Route path="/addevent" element={<Addevet />} />
        <Route path="/update/:EventId" element={<Updatevet />} />
        
        <Route path="/alleventform" element={<AllEventform  />} />

        </Route>
     
        <Route element={<OnlyDoctor />}>
        <Route path="/schdul" element={<Schedul />} />
        <Route path="/manageappoi" element={<Mangeappoimet />} />
        <Route path="/Mangesechdul" element={<Doctersechdul />} />
        <Route path="/Updateschdul/:schdulId" element={<Updateschdule />} />

        </Route>

        
        <Route element={<OnlyShelteradmin />}>
        <Route path="/createnitifi" element={<CreateNotifi  />} />
        <Route path="/mangernotifi" element={<MangeNotifi  />} />
        <Route path="/veiwallfrom" element={<Veiwall  />} />


        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
