import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';


const RepotedItems = () => {
    
   
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://used-product-resale-server-vert.vercel.app/reports')
            const data = await res.json()
            console.log(data);
            return data;

        }
    })
     
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are You Sure delete')
        if(proceed){
            fetch(`https://used-product-resale-server-vert.vercel.app/reports/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(Response => Response.json())
            .then(data => {
              console.log(data)
                refetch()
                toast.success('Delete Successfully')
            })
        }
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl text-center">All Reports</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Repoted Person Name</th>
                            <th>Repoted Message</th>
                            <th>Delete Report</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reports.map((report, i) => <tr
                            key={report._id}
                            >
                                <th>{i + 1}</th>
                                <td>{report.product_name}</td>
                                <td>{report.seller_name}</td>
                                <td>{report.user_name}</td>
                                <td>{report.report_message}</td>
                                <td> <button 
                                onClick={() => handleDelete(report?._id)}
                                className='btn btn-accent btn-xs'>Delete</button></td>
                               
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RepotedItems;