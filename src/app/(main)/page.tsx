'use client'

import { useRouter } from "next/navigation"

const HomePage = () => {
  const router = useRouter()

  const toGeoPlatform = () => {
    router.push('/geoplatform')
  }
  
  return ( 
    <div>
      <h1>Homepage</h1>
      <button onClick={toGeoPlatform}>Geoplatform</button>
    </div>
   );
}
 
export default HomePage;
