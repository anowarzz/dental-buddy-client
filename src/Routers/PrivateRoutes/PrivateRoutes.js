import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { ScaleLoader } from 'react-spinners';


const PrivateRoutes = ({children}) => {
    
const {user, loading} = useContext(AuthContext)

const location = useLocation();

if(loading){
    return <div className='flex items-center justify-center h-screen w-[100%]'>
 <ScaleLoader
  color="#36d7b7"
  size={100}
/>
    </div>
  
}

if(!user){
    return <Navigate to='/login' state={{from: location}} replace />
}

return children; 
   
};

export default PrivateRoutes;