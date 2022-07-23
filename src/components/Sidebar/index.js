import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link,NavLink} from 'react-router-dom';
import './index.scss';
import {faHome,faUser,faCode,faTimeline} from '@fortawesome/free-solid-svg-icons';
import Ronvic from '../../assets/images/ronvic.png';
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className= "nav-bar">
        <Link className= 'logo' to ="/">
            <img src ={Ronvic} alt ="Logo"></img>
            <h2 className= 'title'>Ronvic Cuevas</h2>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon ={faHome} color= "#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname = "active" className ="about-link" to ="/about">
                <FontAwesomeIcon icon ={faUser} color= "#4d4d4e"/> 
            </NavLink>
            <NavLink  activeclassname = "active" className ="project-link" to ="/projects">
                <FontAwesomeIcon icon ={faCode} color= "#4d4d4e"/> 
            </NavLink>
            <NavLink activeclassname = "active" className ="exp-link"to ="/workexperience">
                <FontAwesomeIcon icon ={faTimeline} color= "#4d4d4e"/> 
            </NavLink>
        </nav>

        <ul>
                    <li>

                    <a
                    target="_blank"
                    rel ="noreferrer"
                    href = "https://www.linkedin.com/in/ronvic-cuevas/"
                    >
                        <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
                    </a>
                    </li>
                    <li>
                    <a  target="_blank"
                    rel ="noreferrer"
                    href = "https://github.com/ronvic12"
                    >
                         <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
                    </a>
                    </li>
                </ul>
    </div>
)

export default Sidebar;