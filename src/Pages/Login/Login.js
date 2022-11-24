import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {googleLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const users = form.user.value
        const email = form.email.value
        const password = form.password.value
        console.log( email, users, password);
    }
    const handleGoogleSignIn = () => {
        return googleLogin(googleProvider)
          .then(result => {
            const user = result.user
            console.log(user);
          })
          .catch(error => console.error(error))
      }

    return (
        <div className="hero ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Of User</span>
                            </label>
                            <select name='user' className="select select-bordered w-full max-w-xs">
                                <option>Seller</option>
                                <option>User</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to used laptop buzzer <Link className=' text-green-600' to='/register'>Create new account</Link> </p>
                        <div className='divider'>OR</div>

                        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;