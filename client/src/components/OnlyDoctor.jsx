
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlyDoctor() {

    const { currentUser } = useSelector((state) => state.user);
    return currentUser &&  currentUser.vetdoctor ? <Outlet/> : <Navigate to='/sign-in'/>
  
}