import { useEffect, useState } from "react"

const useBuyers = email =>{
    const [isBuyers, setIsBuyers] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() =>{
            if(email){
                fetch(`https://used-product-resale-server-vert.vercel.app/users/buyer/${email}`)
                .then(Response => Response.json())
                .then(data => {
                    console.log(data);
                    setIsBuyers(data.isBuyers)
                    setIsBuyerLoading(false)
                })
            }
            
        }, [email])
        return [isBuyers, isBuyerLoading]
}
export default useBuyers