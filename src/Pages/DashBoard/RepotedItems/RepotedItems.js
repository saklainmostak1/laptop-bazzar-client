import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';



const RepotedItems = () => {

    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reports')
            const data = await res.json()
            console.log(data);
            return data;

        }
    })
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
                            <th>Delete</th>
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
                                <td><button className='btn btn-primary btn-xs'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RepotedItems;