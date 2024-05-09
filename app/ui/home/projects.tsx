import { projectData } from "@/app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from '@/app/ui/scrollAnimation';
import AccordionForDescription from "@/app/ui/accordion";
import Skills from "./skills";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import Link from "next/link";


export default function Projects() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">プロジェクト</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectData.slice(0, 4).map((project, index) => (
                    <Card className="bg-[#111]" sx={{ maxWidth: 500 }} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={project.label}
                                height="100"
                                image={project.img}
                            />
                            <CardContent>
                                <div className="flex justify-end items-end">
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
                                <h3 className="text-[20px] text-[#DADADB]">{project.title}</h3>
                                <AccordionForDescription
                                    description={project.description}
                                    skills={Array.isArray(project.skills) ?
                                        <div style={{ display: 'flex' }}>
                                            {project.skills.map((skill, index) => (
                                                <div key={index} style={{ marginRight: '8px' }}>{skill}</div>
                                            ))}
                                        </div> :
                                        []
                                    }
                                />

                            </CardContent>
                        </CardActionArea >
                    </Card>
                ))}
            </div>
            <Link
                href="/projects"
            ><strong className="my-6 text-yellow-400 flex justify-end items-end">
                    もっと見る »
                </strong>
            </Link>
        </div >
    );
}
