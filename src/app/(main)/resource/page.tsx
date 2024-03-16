"use client"

import { useRouter } from "next/navigation";

const ResourcePage = () => {
    const router = useRouter()

    const toGp = () => {
        router.push('/geoplatform')
    }

    const toHome = () => {
        router.push('/')
    }

    return ( 
        <div>
            <h1>Resource Page</h1>
            <button onClick={toGp}>To Geoplatform</button>
            <button onClick={toHome}>To Home</button>
        </div>
     );
}
 
export default ResourcePage;