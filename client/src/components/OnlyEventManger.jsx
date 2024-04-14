
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlyEventManger() {

    const { currentUser } = useSelector((state) => state.user);
    return currentUser &&  currentUser.eventmanger ? <Outlet/> : <Navigate to='/sign-in'/>
  
}