import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { events } from '@/app/data';
import ScrollAnimation from '@/app/ui/scrollAnimation';


export default function About() {
  return (
    <>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>主なイベント</h2>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {events.map((e) => (
            <TimelineItem key={e.id}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1>{e.title}</h1>
                <p>{e.date}</p>
                <ScrollAnimation >
                  <p>{e.description}</p>
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>

          ))}
        </Timeline>
      </div>
    </>
  );
}