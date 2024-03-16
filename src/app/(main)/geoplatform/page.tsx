'use client'

import { useRouter } from "next/navigation";

const GeoPlatformPage = () => {
    const router = useRouter()

    const goHome = () => {
        router.push('/')
    }

    return ( 
      <div>
        <h1>Geoplatform</h1>
        <button onClick={goHome}>Back Home</button>
      </div>
     );
  }
   
export default GeoPlatformPage;