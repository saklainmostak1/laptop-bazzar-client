import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() =>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
            })
        }
    }, [email])
    return [isAdmin]
}
export default useAdmin;