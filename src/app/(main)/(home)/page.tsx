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
      <div className="top-0 left-[8.95833vw] w-[82.28vw] h-full relative px-10 py-5">
        <div className="flex flex-col">
          <div className="text-center text-[4.5vw] text-[#FF975C]">
            Welcome to Our Geoplatfrom
          </div>
          {/* container parent */}
          <div className="flex flex-row justify-between mt-5 px-20 items-center">
            {/* container for unor and filter */}
            <div className="flex flex-row space-x-3">
              {/* UNOR flex - global css */}
              <div className="unor-items">
                <div className="bread-nav-img">
                  <img src="SDA.png" alt="SDA Icon"></img>
                </div>
                <div className="font-bold tracking-wide">SDA</div>
              </div>
              <div className="unor-items">
                <div className="bread-nav-img">
                  <img src="rumah.png" alt="SDA Icon"></img>
                </div>
                <div className="font-bold tracking-wide">Perumahan</div>
              </div>
              <div className="unor-items">
                <div className="bread-nav-img">
                  <img src="ck.png" alt="SDA Icon"></img>
                </div>
                <div className="font-bold tracking-wide">Cipta Karya</div>
              </div>
              <div className="unor-items">
                <div className="bread-nav-img">
                  <img src="bm.png" alt="SDA Icon"></img>
                </div>
                <div className="font-bold tracking-wide">Bina Marga</div>
              </div>
              <div className="unor-items bg-[#FF975C]">
                <div className="bread-nav-img">
                  <img src="filter.png" alt="SDA Icon"></img>
                </div>
              </div>
            </div>
            {/* container for view method */}
            <div className="relative inline-block overflow-hidden">
              <div className="flex flex-row space-x-[30px] items-center justify-center border-2 px-[15px] py-[8px] rounded-[10px] border-[#FF975C]">
                <div className="bread-nav-img">
                  <img src="block_s.png"></img>
                </div>
                <div className="bread-nav-img">
                  <img src="list_ns.png"></img>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#FF975C] h-full w-[50%] z-[-1] 
                rounded-tl-[10px]
                rounded-bl-[10px]
                rounded-tr-[10px]" 
              >
              </div>
            </div>
          {/* end of container parent */}
          </div>
          <div className="relative mt-5 px-20">
            <div className="flex focus-within:border-[#FF975C] focus-within:border-opacity-60 px-[20px] py-[8px] justify-between items-center border-[3px] rounded-full border-[#D7D7D7] shadow-md">
              <input className="w-full focus:outline-none focus:text-black" type="text" placeholder="Cari geoplatfrom via keyword"></input>
              <div className="flex flex-row space-x-[5px]">
                <div className="flex items-center justify-center ml-2">
                  <img src="stick.png" alt="Dividers"></img>
                </div>
                <div className="flex items-center justify-center">
                  <img src="search.png" alt="Search Icon"></img>
                </div>
              </div>
            </div>
          {/* end of container parent */}
          </div>
          {/* start of geoplatform grid */}
          <div className="relative mt-10 px-10">
            {/* card */}
            <div className="flex flex-col bg-slate-300 h-[50vh] w-[20vw] rounded-[25px] 
              shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]
              transition transform hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.25)] duration-300"
            >
              {/* image of ee apps */}
              <div>
                gambars
              </div>

              {/* briefcase */}
              <div className="flex flex-col">
                {/* judul */}
                <div>
                  prioritas irigasi
                </div>
                {/* provinsi mana aja */}
                <div>
                  seluruh provinsi indonesia
                </div>
                {/* UNOR */}
                <div>
                  sda
                </div>
                {/* sektor */}
                <div className="flex justify-between">
                  <div className="flex">
                    <div>
                      irigasi
                    </div>
                    <div>
                      something
                    </div>
                  </div>
                  <div>
                    icon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="bg-[#f9f5ed] inset-0 relative pointer-events-none" />
      
      {/* Navigation */}
      <aside className= "page-links md:z-[10] pointer-events-none">
        <Link className="pointer-events-auto hidden md:block" href='/resource/' passHref>
            <div className="page-link--bg r "/>
            <div className="page-link--fg flex flex-col justify-between items-center">
            <div className='flex items-center justify-center overflow-hidden bg-white rounded-full h-[3.2vw] w-[3.2vw] p-[0.7vw]'>
                <img src="book.png" alt="Icon of Resource Section" className="w-[100%] h-auto block"/> 
              </div>
              <div className="topic flex items-center justify-between overflow-hidden">
                <span className="[writing-mode:vertical-lr] rotate-180 ">
                  Invoke
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

        <Link className="pointer-events-auto hidden md:block" href='/about/' passHref>
            <div className="page-link--bg b origin-right"/>
            <div className="page-link--fg flex flex-col justify-between items-center">
              <div className='flex items-center justify-center overflow-hidden bg-white rounded-full h-[3.2vw] w-[3.2vw] p-[0.7vw]'>
                <img src="leaf.png" alt="Icon of Resource Section" className="w-[100%] h-auto "/> 
              </div>
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
