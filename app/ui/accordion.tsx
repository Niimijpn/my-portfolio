import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionForDescription({
    description,
    skills,
}: {
    description: React.ReactNode;
    skills: React.ReactNode;
}) {
    return (
        <>
            <Accordion className='bg-[#1D1E20]'>
                <AccordionSummary className='text-[#DADADB]'
                    expandIcon={<ExpandMoreIcon className='text-[#DADADB]' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    作品の説明を表示
                </AccordionSummary>
                <AccordionDetails className='text-[#DADADB]'>
                    {description}
                </AccordionDetails>
            </Accordion>
            <Accordion className='bg-[#1D1E20]'>
                <AccordionSummary className='text-[#DADADB]'
                    expandIcon={<ExpandMoreIcon className='text-[#DADADB]' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    使用したスキルを表示
                </AccordionSummary>
                <AccordionDetails className='text-[#DADADB]'>
                    {skills}
                </AccordionDetails>
            </Accordion>
        </>
    );
}
