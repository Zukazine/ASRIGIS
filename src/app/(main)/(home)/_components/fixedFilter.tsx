import { useState } from "react";

useState

interface FixedFilterProps {
	unor : string;
	img: string;
}

const FixedFilter = ({unor, img} : FixedFilterProps) => {
	const [click, setClick] = useState(false)
	
	return ( 
		<div onClick={() => setClick(!click)}>
			{click ? 
			<div className="unor-items-clicked">
				<div className="bread-nav-img">
					<img src={img} alt="UNOR Icon"></img>
				</div>
				<div className="font-bold tracking-wide">{unor}</div>
			</div>
			:
			<div className="unor-items">
				<div className="bread-nav-img">
					<img src={img} alt="UNOR Icon"></img>
				</div>
				<div className="font-bold tracking-wide">{unor}</div>
			</div>
			}
		</div>
	);
}
 
export default FixedFilter;