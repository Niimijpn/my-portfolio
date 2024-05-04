import { projectData } from "@/app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">プロジェクト</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {projectData.map((project, index) => (
                    <div className="border-[1px] border-[#e6e6e6] border-solid p-5 rounded-lg" key={index}>
                        <div className="flex justify-between items-start mb-5">
                            <FontAwesomeIcon className='text-[35px] text-[#FFCC17]' icon={project.icon} />
                            <div className="flex gap-x-1">
                                <a className="mr-1 cursor-pointer transition-all duration-500 hover:text-yellow-400"
                                    href={project.gitHubLink}
                                    aria-label={project.label}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-[20px] mb-3">{project.title}</h3>
                        <p className="text-[16px] mb-3 text-[#b3b3b3]">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}