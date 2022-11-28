import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReportToAdmin = () => {
    const reportProduct = useLoaderData()
    const { product_name, seller_name } = reportProduct
    return (
        <div>
            <h2 className='text-3xl text-center text-red-600 mb-10 mt-10'>Report To Admin</h2>
            <h3 className='text-center mb-5 text-xl'>Report For {product_name}</h3>
            <form className='grid justify-center mb-10'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" defaultValue={product_name}
                        className="input input-bordered input-success  w-full max-w-xs"/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text"
                    defaultValue={seller_name}
                        className="input input-bordered input-success  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text"
                        className="input input-bordered input-success  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text"
                        className="input input-bordered input-success  w-full max-w-xs" />
                </div>
               

                   <div className='w-full '>
                   <label className="label">
                        <span className="label-text">Your Message To admin</span>
                    </label>
                   <textarea name='message' className="textarea textarea-info w-full max-w-xs" placeholder="Send Your Message" required></textarea>
                   </div>
                    <input className='btn btn-outline mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReportToAdmin;