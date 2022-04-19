import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const useAuth =()=> {
    const user = localStorage.getItem('user');
    if(user){
        return true;
    } else{
        return false;
    }
}

export const ProtectedRoutes = (props) => {
    const auth = useAuth();
    return (auth) ? <Outlet />: <Navigate to="/login"/>
}

export const PublicRoutes = (props) => {
    const auth = useAuth();
    return (auth)? <Navigate to="/home" />: <Outlet/>;
}