'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const HomePage = () => {
  const router = useRouter()

  const toGp = () => {
    router.push('/geoplatform')
  }
  
  const toRsc = () => {
    router.push('/resource')
  }

  return (
    <>
      <div className="bg-[#f9f5ed] inset-0 fixed pointer-events-none" />
      <aside className= "page-links md:z-[10] pointer-events-none">
        <Link className="page-resources pointer-events-auto" href='/resource/' passHref>
            <div className="page-link--bg r "/>
            <div className="page-link--fg flex flex-col justify-between items-center">
              <img src="twitter.svg" alt="Icon of Resource Section" />
              <div className="topic flex items-center justify-between font-serif overflow-hidden">
                <span className="[writing-mode:vertical-lr] rotate-180 ">
                  Resources
                </span>
              </div>
            </div>
        </Link>
      </aside>
    </>
   );
}
 
export default HomePage;
