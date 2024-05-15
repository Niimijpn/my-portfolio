import { projectData } from "@/app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AccordionForDescription from "@/app/ui/accordion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import Link from "next/link";
import ScrollAnimation from '@/app/ui/scrollAnimation';


export default async function Projects() {
    return (
        <div className="p-4">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">プロジェクト</Typography>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projectData.slice(0, 4).map((project, index) => (
                    <ScrollAnimation key={index}>
                        <Card className="bg-[#111]" sx={{ maxWidth: 500 }} >
                            <CardActionArea>
                                <CardMedia className="transform  hover:scale-110 duration-500 ease-in-out"
                                    component="img"
                                    alt={project.label}
                                    height="100"
                                    image={project.img}
                                />
                                <CardContent>
                                    <div className="flex justify-between items-center mt-4">

                                        <Typography variant="h3" className="text-[20px] text-[#DADADB]">{project.title}</Typography>
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

                                    <AccordionForDescription
                                        description={<Typography variant="caption">{project.description}</Typography>}
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
                    </ScrollAnimation>
                ))}
            </div>
            <Link
                href="/projects"
            >
                <Typography className='my-6 text-yellow-400 flex justify-end items-end' variant="button"><strong>もっと見る »</strong></Typography>
            </Link>
        </div >
    );
}
