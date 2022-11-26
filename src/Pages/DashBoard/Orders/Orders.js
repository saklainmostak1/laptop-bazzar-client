import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }

    })

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
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map( (booking , i) => <tr
                        key={booking._id}
                        className="hover">
                        <th>{i + 1}</th>
                        <td>{booking.user}</td>
                        <td>{booking.products}</td>
                        <td>{booking.prices}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.location}</td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
       </div>
    );
};

export default Orders;