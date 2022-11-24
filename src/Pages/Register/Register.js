import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {register,  formState: {errors}} = useForm()
    return (
        <div className='flex justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Register</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        {...register('name', {
                            required: 'Name is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             {errors.name && <p className='text-red-500'>{errors.name.message}</p>} 
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"   
                         {...register('email', {
                            required: 'Email is required',
                         })}   
                            className="input input-bordered w-full max-w-xs" />
                             {errors.email && <p className='text-red-500'>{errors.email.message}</p>} 
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {value: 6, message: 'password must be 6 character'},
                                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong'}
                            })}  
                            className="input input-bordered w-full max-w-xs" />    
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>} 
                    </div>
                    {/* {
                        signUperror &&  <p className='text-red-500'>{signUperror}</p>
                    } */}
                    <input className='btn btn-primary w-full mt-5' value='Register' type="submit" />
                </form>
                <p>Already Have An Account<Link className=' text-green-500' to='/login'> Please login</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;