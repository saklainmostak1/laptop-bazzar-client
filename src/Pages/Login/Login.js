import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm()
    const handleLogin = data =>{
        console.log(data);
    }
    
    return (
        <div className='flex justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" 
                        {...register("email", {
                            required: "Email Is required"
                        })}
                         className="input input-bordered w-full max-w-xs" />
                          {errors.email && <p className='text-red-500' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="password" 
                        {...register("password", {
                            required: "Password Is required",
                            minLength: {value: 6, message: 'Password must be 6 character' }
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                        {/* <div>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                        </div> */}
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>New to used laptop buzzer <Link className=' text-green-600' to='/register'>Create new account</Link> </p>
                <div className='divider'>OR</div>

                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;