import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() =>{
        if(email){
            fetch(`https://used-product-resale-server-vert.vercel.app/users/admin/${email}`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;