import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import LaptopCards from './LaptopCards';


const AllLaptops = () => {
    const laptops = useLoaderData([])
    const [bookingLaptop, setBookingLaptop] = useState(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, )
      }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6'>
                {
                    loading ?
                    <Loading></Loading>
                    : 
                    laptops?.map(laptop => <LaptopCards
                        key={laptop._id}
                        laptop={laptop}
                        setBookingLaptop={setBookingLaptop}
                    ></LaptopCards>)
                        
                  
                }
                  

            </div>
       
           {bookingLaptop &&
                <BookingModal
                setBookingLaptop={setBookingLaptop}
                    bookingLaptop={bookingLaptop}
                    
                ></BookingModal>
            }
          
           
        </div>
    );
};

export default AllLaptops;