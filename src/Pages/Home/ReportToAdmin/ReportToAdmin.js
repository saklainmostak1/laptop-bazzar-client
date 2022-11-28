import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';



const ReportToAdmin = () => {
    const reportProduct = useLoaderData()
    console.log(reportProduct);
    
    const { product_name, seller_name } = reportProduct

    const handleReport = event =>{
        event.preventDefault()
        const form = event.target
        const productName = form.productName.value
        const sellerName = form.sellerName.value
        const userName = form.userName.value
        const email = form.email.value
        const message = form.message.value
        console.log(productName, sellerName, userName, email, message );

        const report = {
            product_name: productName,
            seller_name: sellerName,
            user_name: userName,
            email,
            report_message: message,
        }
        fetch('https://used-product-resale-server-vert.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
               if(data.acknowledged > 0){
                form.reset('')
                toast.success('Report To Admin SucessFully')
               }
            })

    }
    return (
        <div>
            <h2 className='text-3xl text-center text-red-600 mb-10 mt-10'>Report To Admin</h2>
            <h3 className='text-center mb-5 text-xl'>Report For {product_name}</h3>
            <form onSubmit={handleReport} className='grid justify-center mb-10'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" defaultValue={product_name}
                    name='productName'
                        className="input input-bordered input-success  w-full max-w-xs"/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text"
                    name='sellerName'
                    defaultValue={seller_name}
                        className="input input-bordered input-success  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text"
                    name='userName'
                        className="input input-bordered input-success  w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email"
                    name='email'
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