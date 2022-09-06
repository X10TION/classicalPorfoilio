// Portfolio
import { Typography } from "@material-ui/core"
import React from "react"
import './profile.css'
import CustomerTimeline, {CustmoTimelineseperator} from '../Timeline/timeLine'
import resumDate from '../../Utils/resume'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { TimelineContent,TimelineItem } from "@material-ui/lab"
import TimelineConnector from '@material-ui/lab/TimelineConnector';
const  CustomerTimelineItem = ({title,text,link}) => (
    <TimelineItem>
        <CustmoTimelineseperator />
        <TimelineContent className="timeline_content">
        
            {link ? (<Typography className="timeline_text" >
                <span>{title}:</span>{" "}<a href={link} target="_blank">{text}</a>
            </Typography>) : (
                <Typography className="timeline_text"> <span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>
      </TimelineItem>
)

const Profile= () => {
    return(
        <div className="profile container_shadow ">
            <div className="profile_name">
                <Typography className="name">
                    {resumDate.name}
                </Typography>
                <Typography className="title">
                    {resumDate.title}
                </Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assest/img/fel.jpg')} alt="" />
            </figure>
            <div className="profile_information">
                <CustomerTimeline icon={<PersonOutlineOutlinedIcon />}>
                <CustomerTimelineItem title='Name' text={resumDate.name} />
                <CustomerTimelineItem title='Title' text={resumDate.title} />
                <CustomerTimelineItem title='Email' text={resumDate.email} />
                     {Object.keys(resumDate.socials).map(key => 
                        <CustomerTimelineItem title={key} text={resumDate.socials[key].text} link={resumDate.socials[key].link} />
                        )}
                     
                     </CustomerTimeline>
                <br/>
                <button>My Button</button>
            </div>
            
        </div>
    )
}
export default Profile