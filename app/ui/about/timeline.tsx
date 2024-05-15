import * as React from 'react';
import Timeline, { timelineClasses } from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timeline } from '@/app/data';
import ScrollAnimation from '@/app/ui/scrollAnimation';
import { Typography } from '@mui/material';


export default function TimeLine() {
  return (
    <>
      <div className='p-4'>
        <Typography variant='h2' className='text-2xl font-semibold mb-4'>タイムライン</Typography>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {timeline.map((e) => (
            <TimelineItem key={e.id}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h4'>{e.title}</Typography>
                <Typography variant='caption'>{e.date}</Typography>
                <ScrollAnimation >
                <Typography variant='caption'>{e.description}</Typography>
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>

          ))}
        </Timeline>
      </div>
    </>
  );
}