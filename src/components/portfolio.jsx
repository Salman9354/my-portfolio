import PortfolioCards from './portfolioCards';
import { projects } from '../utils/constants';
import SectionTitle from './titelSection';


const Portfolio = () => {
  return (
    <section className='py-20 bg-gray-200 align-element' id='portfolio'>
    <SectionTitle text='web creations' />
    <div className='py-16 p-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
      {projects.map((project,index) => {
        return <PortfolioCards key={index} {...project} />;
      })}
    </div>
  </section>
  )
}

export default Portfolio