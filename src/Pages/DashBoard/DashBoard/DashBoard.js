import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';


const DashBoard = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, )
      }, [])
      if(loading){
        return <Loading></Loading>
      }
    return (
        <div>
            <h2 className='text-3xl text-green-500 text-center'>Welcome To DashBoard</h2>
            <h2 className='mt-20 text-blue-700 text-2xl text-center'>Thank Your For Create Account And Login</h2>
        </div>
    );
};

export default DashBoard;