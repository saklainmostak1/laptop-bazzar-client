import React, { useEffect, useState } from 'react';

const AllLaptops = () => {
    const [categoryLaptops, setCategoryLaptops] = useState([])
    console.log(categoryLaptops);


    useEffect(() =>{
        fetch('http://localhost:5000/allLaptops')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setCategoryLaptops(data[0])
        })
    }, [])
    return (
        <div>
            <p>All laptop: {categoryLaptops.length} </p>

           
        </div>
    );
};

export default AllLaptops;