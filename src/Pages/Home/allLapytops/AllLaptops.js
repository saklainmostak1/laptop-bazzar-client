import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LaptopCards from './LaptopCards';


const AllLaptops = () => {
    const laptops = useLoaderData([])
    
    console.log(laptops);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6'>
            {
                laptops?.map(laptop => <LaptopCards
                key={laptop._id}
                laptop={laptop}
                ></LaptopCards> )
            }
            
        </div>
    );
};

export default AllLaptops;