'use client'

import { useRouter } from "next/navigation"

const HomePage = () => {
  const router = useRouter()

  const toGp = () => {
    router.push('/geoplatform')
  }
  
  const toRsc = () => {
    router.push('/resource')
  }

  return ( 
    <div>
      <h1>Homepage</h1>
      <div className="flex flex-col items-start">
        <button onClick={toGp} className="bg-red-300">Geoplatform</button>
        <button onClick={toRsc} className="bg-blue-300">Resource</button>
      </div>
    </div>
   );
}
 
export default HomePage;
