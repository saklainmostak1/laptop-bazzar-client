import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bookingLaptop, setBookingLaptop }) => {
    const { user } = useContext(AuthContext)

    const { product_name, resale_price } = bookingLaptop
    const handleBook = event => {
        event.preventDefault()
        const form = event.target
        const products = form.productname.value
        const prices = form.price.value
        const user = form.userName.value
        const email = form.email.value
        const phone = form.phone.value
        const location = form.location.value


        const booking = {
            products,
            prices,
            user,
            email,
            phone,
            location,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingLaptop(null)
                    toast.success('SucessFully Booking')
                }
                // else{
                //     toast.error('aLaready Booked')
                // }

            })
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBook} className='mt-10 grid grid-cols-1 gap-3'>
                        <input name='productname' defaultValue={product_name} type="text" placeholder="Type here" className="input input-bordered input-primary w-full " disabled />
                        <input name='price' defaultValue={resale_price} type="text" placeholder="Type here" className="input input-bordered input-primary w-full " disabled />
                        <input name='userName' defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered input-primary w-full " disabled />
                        <input name='email' defaultValue={user.email} type="text" placeholder="Type here" className="input input-bordered input-primary w-full " disabled />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered input-primary w-full " required />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered input-primary w-full " required />
                        <br />
                        <input className='w-full btn btn-outline' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;