import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

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
                    <Typography variant='button'>作品の説明を表示</Typography>
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
                    <Typography variant='button'>使用したスキルを表示</Typography>
                </AccordionSummary>
                <AccordionDetails className='text-[#8e8e8e]'>
                    {skills}
                </AccordionDetails>
            </Accordion>
        </>
    );
}
