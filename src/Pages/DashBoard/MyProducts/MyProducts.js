import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const {user} = useContext(AuthContext)
    const { data: sellerProducts = [],  isLoading, refetch } = useQuery({
        queryKey: ['sellerProducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/sellerProduct?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure delete')
            
           if(proceed){
            fetch(`http://localhost:5000/sellerProduct/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(Response => Response.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('Delete Successfully')
                }
               
            })
           }
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>My Products: {sellerProducts?.length} </h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                          sellerProducts?.map((product, i) => 
                          <tr className="hover" key={product._id}>
                          <th>{i + 1}</th>
                          <td>{
                            <div className="avatar">
                            <div className="w-24 rounded-full">
                              <img src={product.img} alt='' />
                            </div>
                          </div>
                            }</td>
                          <td>{product.product_name}</td>
                          <td>{product.resale_price}</td>
                          <td><button className='btn btn-accent  btn-xs'>Advertise</button></td>
                          <td><button
                          onClick={() => handleDelete(product._id)}
                          className='btn btn-error btn-xs'>Delete</button></td>
                      </tr>
                      
                      )
                       }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;