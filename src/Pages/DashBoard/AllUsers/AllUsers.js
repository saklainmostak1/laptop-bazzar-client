import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;
        }
    })
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                refetch()
            })
        }
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td> {
                                      user?.role !== 'admin' && 
                                      <button 
                                onClick={()=> handleMakeAdmin (user._id)}
                                 className='btn btn-primary btn-xs'>Make Admin</button>
                                    } </td>
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