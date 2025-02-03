import { links } from "../utils/constants"

const Header = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="text-white ml-6 align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold text-red-700">Web<span className="text-white ">Dev</span></h2>
      <div className="flex gap-x-3">
        {links.map((link,index)=>{
        const {href,text} = link
        return(
          <a key={index} href={href} 
          className='capitalize text-lg tracking-wide hover:text-red-700 duration-300'>{text}
          </a>
        )
        })}
      </div>
      </div>
    </nav>
  )
}

export default Header
