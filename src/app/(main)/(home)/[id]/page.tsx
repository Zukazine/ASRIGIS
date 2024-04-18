'use client'

import { geoplatform } from "../_components/data";
import { useParams } from "next/navigation";

const Geoplatform = () => {
	const Params = useParams();

	console.log(typeof(Number(Params['id'])));

  const card = geoplatform.find(card => card.id === Number(Params['id']));

  if (!card) return <div>Loading...</div>;

  const { link } = card;

	return ( 
		<iframe className="h-[100vh] w-full" src={link}/>
	);
}
 
export default Geoplatform;