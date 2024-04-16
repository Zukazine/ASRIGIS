'use client'

import GalleryCard from "./_components/card"
import Image from "next/image"
import GPFilter from "./_components/filter"
import FixedFilter from "./_components/fixedFilter"
import ViewGallery from "./_components/view"
import SearchGallery from "./_components/search"
import GeoNavigation from "./_components/navigation"

const HomePage = () => {
  return (
    <>
      <div className="top-0 left-[8.95833vw] w-[82.28vw] h-[100vh] relative px-10 py-5 overflow-auto scroll-smooth geoscrollbar">
        <div className="flex flex-col">
          <div className="text-center text-[4.5vw] text-[#FF975C]">
            Welcome to Our Geoplatfrom
          </div>
          <div className="flex flex-row justify-between mt-5 px-20 items-center">
            <div className="flex flex-row space-x-3">
              <FixedFilter unor='SDA' img='sda.png' />
              <FixedFilter unor='Perumahan' img='rumah.png' />
              <FixedFilter unor='Cipta Karta' img='ck.png' />
              <FixedFilter unor='Bina Marga' img='bm.png' />
              <GPFilter />
            </div>
            <ViewGallery /> 
          </div>
          <SearchGallery /> 
          
          {/* Grid */}
          <div className="grid grid-cols-3 mt-10 px-10 gap-x-0 gap-y-8 place-content-center place-items-center">
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="bg-[#f9f5ed] inset-0 relative pointer-events-none" />
      
      {/* Navigation */}
      <GeoNavigation />
    </>
   );
}
 
export default HomePage;
