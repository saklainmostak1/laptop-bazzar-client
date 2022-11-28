import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import errorImg from './error.jpg'

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            navigate('/login')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <img className='w-full mt-10' src={errorImg} alt="" />
            <p className='text-red-600 font-bold text-center'>{error.statusText || error.message}</p>
            <h4 className='text-3xl font-bold text-center'>
                Please <button
                onClick={handleLogOut}
                className='btn btn-primary'>LogOut</button> And Login Again</h4>
        </div>
    );
};

export default DisplayError;