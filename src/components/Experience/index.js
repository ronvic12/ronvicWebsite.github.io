import "./index.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkIcon from '../WorkIcon';
const Experience = () => {
  return (
  <>


  <div className = "experience-container">
  <h1>TimeLine</h1>
  <VerticalTimeline>
    <VerticalTimelineElement 
    className = "work_experience"
    date ="22/09/2017"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon = {<WorkIcon/>}
    >


    </VerticalTimelineElement>

  </VerticalTimeline>
    

    
    </div>
    </>
  );
};

export default Experience;
