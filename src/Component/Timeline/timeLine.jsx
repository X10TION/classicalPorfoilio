import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './timeLine.css'
import { Typography } from '@material-ui/core';


const CustomerTimeline = ({title,icon,children}) => {
    return (
            <Timeline className={"timeline"}>
      <TimelineItem className={'timeline_firstItem'}>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>
          {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h5' className='timeline_header'>
            {title}
            </Typography>
            </TimelineContent>
            </TimelineItem>       
      {children}
    </Timeline>
        
    )
}

export const CustmoTimelineseperator = () => (
  <TimelineSeparator className={'seperator_padding'}>
  <TimelineDot className={"timeline_dot"} variant={'outlined'}/>
  <TimelineConnector />
</TimelineSeparator>

)
export default CustomerTimeline