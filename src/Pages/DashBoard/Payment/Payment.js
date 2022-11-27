import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const payments = useLoaderData()
    const {products, prices} = payments
   
    return (
        <div>
            <h2 className='text-3xl text-center mb-5'>Payment</h2>
            <h2 className='text-xl text-center'>Payment <strong>{prices} tk </strong> For {products}  </h2>
        </div>
    );
};

export default Payment;