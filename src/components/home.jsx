import {avatar , coder} from "../utils/constants"
import {FaGithubSquare, FaLinkedin} from "react-icons/fa"
const Home = () => {
  return (
    <section className="bg-gray-200 w-full " id="home">
      <div className="flex justify-between ">
           <div className=" w-7/12  mt-6 ml-2 ">
            <h1 className="text-7xl font-bold tracking-wider">Designer</h1>
              <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">I Make Web Pages Come Alive . </p>
            <div className="flex gap-x-4 mt-4">
               <a
              href='https://github.com/Salman9354'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/salman-ali-256920256'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            </div>
              <div className="p-2 mt-16 ml-12">
        <h1 className="text-7xl font-bold tracking-wider"> {coder} </h1>
        <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">Front end developer who writes clean, elegent and efficient code . </p>
        </div></div>
        <article className="hidden md:block">
             <div className="mb-4 h-full w-full object-cover"> <img alt="avatar" className="h-full lg:h-full rounded  md:h-full md:w-full " src={avatar}/></div>
             </article>
        </div>
          </section>
     
  )
}

export default Home
