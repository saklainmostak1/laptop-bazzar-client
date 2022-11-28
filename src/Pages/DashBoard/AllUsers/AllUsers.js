import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
   
    
    const { data: users = [], refetch, status, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
                const res = await fetch('https://used-product-resale-server-vert.vercel.app/users')
                const data = await res.json()
                return data;
            
        }
    })
    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    
    const handleMakeAdmin = id =>{
        fetch(`https://used-product-resale-server-vert.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(Response => Response.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfully')
                refetch()
            }
        })
    }
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are You Sure delete')
        if(proceed){
            fetch(`https://used-product-resale-server-vert.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Delete Successfully')

            })
        }
    }
    const handleVerify = id =>{
        fetch(`https://used-product-resale-server-vert.vercel.app/users/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Verified'})
        })
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
              refetch()
            
            }
        })

    }
   
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>User Type</th>
                            <th>Admin</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr 
                            key={user._id}
                            className="hover">
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td> {
                                      user?.role !== 'admin' && 
                                      <button 
                                onClick={()=> handleMakeAdmin (user._id)}
                                 className='btn btn-primary btn-xs'>Make Admin</button>
                                    } </td>
                                    <td>
                                        {
                                            user?.role === 'Seller' &&
                                            <button 
                                            onClick={() => handleVerify(user._id)}
                                            className='btn btn-warning btn-xs'>{user?.status ? status : 'pending'} </button>
                                        }
                                    </td>
                                <td> <button 
                                onClick={() => handleDelete(user?._id)}
                                className='btn btn-accent btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;