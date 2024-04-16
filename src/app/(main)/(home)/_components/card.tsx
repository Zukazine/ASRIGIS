const GalleryCard = () => {
	return (  
		<>
			{/* card */}
			<div className="flex flex-col bg-[#F3EFFD] h-[50vh] w-[20vw] rounded-[25px] 
				shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]
				transition transform hover:shadow-[5px_5px_8px_0px_rgba(0,0,0,0.25)] duration-300"
			>
				{/* image of ee apps */}
				<div className="inset-0 overflow-hidden border-none rounded-t-[25px]">
					<img className="object-cover w-full h-[25vh]" src="rice.png" alt="EE maps"></img>
				</div>

				{/* briefcase */}
				<div className="flex flex-col mt-[20px] space-y-[5px]">
					{/* judul */}
					<div className="flex justify-between items-center px-[17px]">
						<div className="text-[1.5vw]">
							Prioritas Irigasi
						</div>
						<div>
							<img src="option.png" alt="Option Icon"></img>
						</div>
					</div>
					{/* provinsi mana aja */}
					<div className="flex items-center space-x-[10px] px-[17px]">
						<div className="flex items-center justify-center h-[2.0259vh] w-[0.622vw]">
							<img src="loc.png" alt="Location Icon"></img>
						</div>
						<div className="text-[1.05vw]">
							Seluruh Provinsi Indonesia
						</div>
					</div>
					{/* UNOR */}
					<div className="flex flex-row ml-[17px]">
						<div className="text-white bg-[#FF975C] py-[1px] px-[13px] rounded-[10px] mt-[5px] text-[1vw]">
							SDA
						</div>
					</div>
					{/* sektor */} 
					<div className="flex justify-between px-[17px] items-center">
						<div className="flex space-x-[7px] mt-[5px]">
							<div className="rounded-[10px] border-[1px] border-[#FF975C] py-[1px] px-[13px] text-[1vw]">
								Irigasi
							</div>
							<div className="rounded-[10px] border-[1px] border-[#FF975C] py-[1px] px-[13px] text-[1vw]">
								Something
							</div>
						</div>
						<div className="flex items-center justify-center h-[3.079vh] w-[1vw]">
							<img src="sda.png" alt="SDA Icon"></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
 
export default GalleryCard;