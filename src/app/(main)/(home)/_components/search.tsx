const SearchGallery = () => {
	return ( 
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
		</div>
	);
}
 
export default SearchGallery;