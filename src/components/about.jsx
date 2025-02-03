import { aboutSvg } from "../utils/constants"
import SectionTitle from "./titelSection"
const About = () => {
  return (
    <section className='bg-gray-100 py-20' id='about'>
    <div className='align-element m-4 p-2 grid md:grid-cols-2 items-center gap-16'>
      <img src={aboutSvg} className=' p-2  w-full h-72' />
      <article>
        <SectionTitle text='code and coffee' />
        <p className='text-slate-600 mt-8 leading-loose'>
          Hi, there! I'm a Web Developer, with experience in JavaScript, and
          expertise in frameworks like React.js. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </p>
      </article>
    </div>
  </section>
  )
}

export default About
