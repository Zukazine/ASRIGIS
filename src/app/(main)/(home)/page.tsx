'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const HomePage = () => {
  const router = useRouter()

  const toGp = () => {
    router.push('/')
  }
  
  const toRsc = () => {
    router.push('/resource')
  }

  return (
    <>
      <div className="bg-[#f9f5ed] inset-0 fixed pointer-events-none" />
      <aside className= "page-links md:z-[10] pointer-events-none">
        <Link className="pointer-events-auto" href='/resource/' passHref>
            <div className="page-link--bg r "/>
            <div className="page-link--fg flex flex-col justify-between items-center">
              <img src="twitter.svg" alt="Icon of Resource Section" />
              <div className="topic flex items-center justify-between overflow-hidden">
                <span className="[writing-mode:vertical-lr] rotate-180 ">
                  Resources
                </span>
              </div>
            </div>
        </Link>

        <Link className="pointer-events-none" id='page-works-dup' href='/'>
            <div className="scale-0"/>
        </Link>

        <Link className="page-works pointer-events-none" href='/'>
            <div className="origin-right scale-0"/>
        </Link>

        <Link className="pointer-events-auto" href='/about/' passHref>
            <div className="page-link--bg b origin-right"/>
            <div className="page-link--fg flex flex-col justify-between items-center">
              <img src="twitter.svg" alt="Icon of Resource Section" />
              <div className="topic flex items-center justify-between overflow-hidden">
                <span className="[writing-mode:vertical-lr] rotate-180 ">
                  About
                </span>
              </div>
            </div>
        </Link>
      </aside>
    </>
   );
}
 
export default HomePage;
