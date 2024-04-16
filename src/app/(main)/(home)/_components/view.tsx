const ViewGallery = () => {
	return ( 
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
	);
}
 
export default ViewGallery;