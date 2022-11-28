import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const AddProducts = () => {
    const {user} = useContext(AuthContext)
    console.log(user.status);
    const {register, handleSubmit } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()

    const handleAddProducts = data =>{
        console.log(data.email);
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(Response => Response.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
               
                const addProducts = {
                  seller_name: data.sellerName ,
                  location:  data.location,
                  product_name: data.productName,
                  posted_date: data.postedDate,
                  email: user.email,
                  img: imgData.data.url,
                  original_price: data.originalPrice ,
                  resale_price: data.resalePrice ,
                  used_year: data.usesYear,
                  condition: data.condition ,
                  details: data.description,
                  

                }
                fetch('https://used-product-resale-server-vert.vercel.app/sellerProduct' , {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(addProducts)
                })
                .then(Response => Response.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.productName}  sucessfully add`)
                    navigate('/dashboard/myproducts')
                })
            }
        })

    }


    

    
    return (
        <div className=' flex justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Add Products</h2>
                <form onSubmit={handleSubmit(handleAddProducts)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" 
                        {...register('productName', {
                            required: ' Product Name is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text"
                        defaultValue={user.status} 
                        {...register('sellerName', {
                            required: 'Seller Name is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <input type="text"
                        defaultValue={user.email} 
                        {...register('email', {
                            required: 'Seller Email is required'
                        })}    
                            className="input input-bordered w-full max-w-xs"  />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type="text" 
                        {...register('originalPrice', {
                            required: 'Original Price is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text" 
                        {...register('resalePrice', {
                            required: 'Resale Price is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Uses Year</span>
                        </label>
                        <input type="text" 
                        {...register('usesYear', {
                            required: 'Uses Year is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posted Date</span>
                        </label>
                        <input type="date" 
                        {...register('postedDate', {
                            required: 'Name is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" 
                        {...register('image', {
                            required: 'image is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input type="text"   
                         {...register('condition', {
                            required: 'Condition is required',
                         })}   
                            className="input input-bordered w-full max-w-xs" />
                            
                    </div>  
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"   
                         {...register('location', {
                            required: 'Location is required',
                         })}   
                            className="input input-bordered w-full max-w-xs" />
                            
                    </div>  
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"   
                         {...register('description', {
                            required: 'Description is required',
                         })}   
                            className="input input-bordered w-full max-w-xs" />
                            
                    </div>  
                    <input className='btn btn-accent w-full mt-5' value='Add Products' type="submit" />
                </form>
                
            </div>
        </div>
    );
};

export default AddProducts;