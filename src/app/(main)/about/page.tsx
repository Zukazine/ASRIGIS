'use client'

import { useRouter } from "next/navigation";

const AboutPage = () => {
    const router = useRouter()

    const toHome = () => {
        router.push('/')
    }

    const toRsc = () => {
        router.push('/resource')
    }

    return ( 
      <div>
        <h1>Geoplatform</h1>
        <button onClick={toRsc}>To Resource</button>
        <button onClick={toHome}>To Home</button>
      </div>
     );
  }
   
export default AboutPage;