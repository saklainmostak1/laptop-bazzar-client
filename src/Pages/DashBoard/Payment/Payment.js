import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const payments = useLoaderData()
    const navigation = useNavigation()
    const { products, prices } = payments

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl  mb-5'>Payment</h2>
            <h2 className='text-xl '>Payment <strong> $ {prices} </strong> For {products}  </h2>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                    payments={payments}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;