import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Category = () => {

    // const [categoryLaptops, setCategoryLaptops] = useState([])

    const navigation = useNavigation()

    const {data: categoryLaptops = [], isLoading } = useQuery({
        queryKey: ['categoryNames'], 
        queryFn: async() =>{
            const res = await fetch('https://used-product-resale-server-vert.vercel.app/categoryNames')
            const data = await res.json()
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    // useEffect(() =>{  
    //     fetch('https://used-product-resale-server-vert.vercel.app/categoryNames')
    //     .then(Response => Response.json())
    //     .then(data => setCategoryLaptops(data))
    // }, [])
    return (
       <div>
        <h2 className='text-3xl text-center'>Laptop Categories</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
           
           {
               categoryLaptops?.map(laptop => <CategoryCard
               key={laptop._id}
               laptop={laptop}
               ></CategoryCard>)
           }
          
       </div>
       </div>
    );
};

export default Category;