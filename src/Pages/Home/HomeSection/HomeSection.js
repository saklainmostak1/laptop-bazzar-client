import React from 'react';
import img from './img.jpg'

const HomeSection = () => {
    return (
        <div className="card m-10 mx-auto  bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Buy And Sell Second Hand Laptop </h2>
                <p className='text-xl'>Find 2nd Hand Laptops For Sale. Now with us! Search For 2nd Hand Laptops For Sale at</p>
            </div>
        </div>
    );
};

export default HomeSection;