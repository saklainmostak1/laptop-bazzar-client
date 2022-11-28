import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Orders = () => {
    const { user } = useContext(AuthContext)

    const url = `https://used-product-resale-server-vert.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            )
            const data = await res.json()
            return data
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl mb-5">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Booking Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((booking, i) => <tr
                                key={booking._id}
                                className="hover">
                                <th>{i + 1}</th>
                                <td>{booking.displayName}</td>
                                <td>{booking.products}</td>
                               <td>{booking.prices}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.location}</td>
                                <td>
                                    {
                                        booking.prices && !booking.paid && 
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-primary btn-sm'>Payment</button>
                                </Link>
                                    }
                                    {
                                        booking.prices && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;