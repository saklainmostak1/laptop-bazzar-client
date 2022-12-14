import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Loading from '../../Shared/Loading/Loading';


const LaptopCards = ({ laptop, setBookingLaptop }) => {


  const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }


  const { details, img, location, original_price, posted_date, product_name, resale_price, seller_name, uses_year} = laptop
  return (
    <div className="card m-10 shadow-xl">
      <figure><img className='w-full' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <div className='flex justify-between my-3'>
          <h5 > <strong>Seller Name:</strong> {seller_name} <p className='text-green-600'><  FaCheck></FaCheck></p> </h5>
          <h5><strong>Location:</strong> {location}</h5>
        </div>
        <div className='flex justify-between my-3'>
          <h5><strong>Original Price:</strong> {original_price}</h5>
          <h5><strong>Resale Price:</strong> {resale_price}</h5>
        </div>
        <div className='flex justify-between my-3'>
          <h5><strong>Posted Date:</strong> {posted_date}</h5>
          <h5><strong>Used: </strong> {uses_year}</h5>
        </div>
        <p className='text-center my-5'>{details}</p>
        <div className="card-actions justify-center">
          <label onClick={() => setBookingLaptop(laptop)}
            htmlFor="booking-modal"
            className="btn btn-primary">Book Now</label>
        </div>
        <div className='text-center mt-5'>
          <Link 
          to={`/reportadmin/${laptop._id}`} className='text-blue-600 underline'>
            Report To admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaptopCards;