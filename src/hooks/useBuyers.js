import { useEffect, useState } from "react"

const useBuyers = email =>{
    const [isBuyers, setIsBuyers] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() =>{
            if(email){
                fetch(`http://localhost:5000/users/buyer/${email}`)
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