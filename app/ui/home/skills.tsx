import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsIcon } from '@/app/data';
import ScrollAnimation from '@/app/ui/scrollAnimation';


export default function Skills(){
    return (
        <>
        <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>スキル</h2>
        
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
        {skillsIcon.map((skill, index) => (
            <ScrollAnimation key={index}>
            <div className='bg-gray-300 text-gray-900 flex justify-center items-center gap-x-4 p-4 rounded-lg shadow-md transition-all duration-500 cursor-pointer hover:bg-gray-400'>
            <FontAwesomeIcon className='text-2xl' icon={skill.icon} />
            <p>{skill.name}</p>
            </div>
            </ScrollAnimation>
        ))}
        </div>
        
        </div>
        </>
    );
}