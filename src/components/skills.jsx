import { skills } from '../utils/constants';
import SectionTitle from './titelSection';
import SkillsCard from './skillsCard';


const Skills = () => {
  return (
    <section className='py-20 bg-gray-100  align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill , index) => {
          return <SkillsCard key={index} {...skill} />;
        })}
      </div>
    </section>
  );

};
export default Skills;