interface FixedFilterProps {
	unor : string;
	img: string;
}

const FixedFilter = ({unor, img} : FixedFilterProps) => {
	return ( 
		<div className="unor-items">
			<div className="bread-nav-img">
				<img src={img} alt="UNOR Icon"></img>
			</div>
			<div className="font-bold tracking-wide">{unor}</div>
		</div>
	);
}
 
export default FixedFilter;