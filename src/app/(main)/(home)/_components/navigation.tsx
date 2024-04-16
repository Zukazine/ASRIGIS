import Link from "next/link";
import { useRouter } from "next/navigation"; 



const GeoNavigation = () => {
	const router = useRouter()

  const toGp = () => {
    router.push('/')
  }
  
  const toRsc = () => {
    router.push('/resource')
  }
	
	return ( 
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
	);
}
 
export default GeoNavigation;