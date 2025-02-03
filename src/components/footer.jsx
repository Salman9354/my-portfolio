
import { FaGithubSquare,FaLinkedin } from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {footerData} from "../utils/constants"
const Footer = () => {
  return (
    <footer className="h-40 bg-black ">
     <div className="text-gray-200 flex  justify-center">
         {footerData.map((data,index)=>{
          const {href,icon} = data
          return (
             <a className="mt-8 flex p-4" href={href} >{icon}</a>
            
          )
         })}
                
              
     </div>
    </footer>
  )
}

export default Footer
