import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categoryLaptops, setCategoryLaptops] = useState([])


    useEffect(() =>{
        fetch('http://localhost:5000/categoryNames')
        .then(Response => Response.json())
        .then(data => setCategoryLaptops(data))
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            
            {
                categoryLaptops.map(laptop => <CategoryCard
                key={laptop._id}
                laptop={laptop}
                ></CategoryCard>)
            }
           
        </div>
    );
};

export default Category;