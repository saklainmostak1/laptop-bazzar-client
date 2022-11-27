import React from 'react';
import { useForm } from 'react-hook-form';


const AddProducts = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    
    const handleAddProducts = data =>{
        console.log(data);
    }
    
    


    
    return (
        <div className='h-[800px] flex justify-center'>
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
                        {...register('sellerName', {
                            required: 'Seller Name is required'
                        })}    
                            className="input input-bordered w-full max-w-xs" />
                             
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
                         {...register('Condition', {
                            required: 'Condition is required',
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