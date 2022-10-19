import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoutes = ({children}) => {
    let location = useLocation();

    const {user,loading}=useContext(AuthContext)
    if(loading)
    {
        console.log('loading founded')
        return <div>Loading...</div>
    }
    if(user && user.uid )
    {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;