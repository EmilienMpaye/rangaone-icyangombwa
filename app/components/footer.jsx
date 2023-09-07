"use client "
import { emil} from "@public/images/amafoto";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa"
import Image from "next/image";
const Footer = () => {
const links =[

  {
    id:1,
    child:(<>
    <FaFacebook size={25}/>
    </>),href:'https://www.linkedin.com/in/emilien-zia-2569b6256' ,
           style:'rounded-tr-md'
  },
  {
    id:2,
    child:(<>
     <FaInstagram size={25}/>
    </>),href:'https://github.com/EmilienMpaye' ,
    style:'text-red-500'
  },
  {
    id:3,
    child:(<>
     <FaMailBulk size={25}/>
    </>),href:"mailto:frereemi@gmail.com",
  }
 ]
 
  return (
  
        <footer className="w-full text-center flex flex-row footer-container  bg-blue-gradient py-4">
          <div className="flex items-center flex-1 font-bold">
    RANGA  URANGISHE
    <span className="ml-2 mr-2">
      <Image src={emil} alt="rwanda1" style={{height:"20", width:"25"}} 
      className=" w-12 h-12   border-2 border-black rounded-full mt-1 mr-2 " />
    </span>
    ICYANGOMBWA HANO
  </div>
       <ul className="flex flex-row space-x-2 gap-10 ">
       {links.map(({
        id,child,href
       })=>(
        <li key={id}>
          <a href={href} className="text-white font-bold flex flex-row py-3 hover:bg-black hover:p-2 hover:rounded-full"
           target="_blank"
           rel="noreferrer">
            {child}
          </a>
        </li>
       ))}
       </ul>
        </footer>
    
  )
}

export default Footer