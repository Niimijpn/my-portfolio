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
            <Accordion className='bg-[#111]'>
                <AccordionSummary className='text-[#8e8e8e]'
                    expandIcon={<ExpandMoreIcon className='text-[#8e8e8e]' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    作品の説明を表示
                </AccordionSummary>
                <AccordionDetails className='text-[#8e8e8e]'>
                    {description}
                </AccordionDetails>
            </Accordion>
            <Accordion className='bg-[#111]'>
                <AccordionSummary className='text-[#8e8e8e]'
                    expandIcon={<ExpandMoreIcon className='text-[#8e8e8e]' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    使用したスキルを表示
                </AccordionSummary>
                <AccordionDetails className='text-[#8e8e8e]'>
                    {skills}
                </AccordionDetails>
            </Accordion>
        </>
    );
}
