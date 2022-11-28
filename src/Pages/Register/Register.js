import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';


const Register = () => {
    const googleProvider = new GoogleAuthProvider()
    const { createUser, googleLogin, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const users = form.user.value
        const email = form.email.value
        const password = form.password.value

        setSignUpError('')

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('sucessFully create user')

                const userInfo = {
                    displayName: name,
                }

                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)

            })
        const saveUser = {
            email,
            name,
            role: users
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)

            })


    }
    // const getUserToken = email =>{
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(Response => Response.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken)
    //             navigate('/')
    //         }
    //     } )
    // }


    const handleGoogleSignIn = () => {
        return googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
                toast.success('SuccessFully Register')

            })
            .catch(error => console.error(error))

    }
    //   const saveUser = {
    //     googleProvider,

    // }
    // fetch('http://localhost:5000/users', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(saveUser)
    // })
    // .then(Response => Response.json())
    // .then(data => {
    //     setCreatedUserEmail(googleProvider)

    // })


    return (
        <div className="hero ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Of User</span>
                            </label>
                            <select name='user' className="select select-bordered w-full max-w-xs">
                                <option>Seller</option>
                                <option>Buyers</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        {
                            signUpError && <p className='text-red-500'>{signUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already Have An Account <Link className=' text-green-600' to='/login'> Go to  Login Please!!!</Link> </p>
                        <div className='divider'>OR</div>
                        <div>
                            <button onClick={handleGoogleSignIn} className='btn btn-primary w-full mb-5'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>

                </ div>
            </div>
        </div>
    );
};

export default Register;