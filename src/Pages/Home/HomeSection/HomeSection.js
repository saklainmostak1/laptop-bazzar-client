import React from 'react';
import img from './img.jpg'

const HomeSection = () => {
    return (

        <div className="card m-10 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className=" text-3xl mb-5 text-center">Buy And Sell Second Hand Laptop </h2>
                <p className='text-xl text-center'>Find 2nd Hand Laptops For Sale. Now with us! Search For 2nd Hand Laptops For Sale at here you can buy an sell various type of laptops , Follow us And if you have any complain about us please inform us
                </p>
            </div>
        </div>

    );
};

export default HomeSection;