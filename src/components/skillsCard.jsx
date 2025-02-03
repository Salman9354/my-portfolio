

const SkillsCard = ({ icon, title, text }) => {
    return (
      <article className="m-6  transform transition-transform duration-300 hover:scale-105">
        <span>{icon}</span>
        <h4 className='mt-6 font-bold'>{title}</h4>
        <p className='mt-2 text-slate-500'>{text}</p>
      </article>
    );
  };
  export default SkillsCard;