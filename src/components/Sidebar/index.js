import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link,NavLink} from 'react-router-dom';
import './index.scss';
import {faHome,faUser,faCode,faTimeline} from '@fortawesome/free-solid-svg-icons';
import Ronvic from '../../assets/images/ronvic.png';

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className= 'logo' to ='/'>
            <img src ={Ronvic}></img>
            <h2 className= 'title'>Ronvic Cuevas</h2>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon ={faHome} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className ="about-link" to ="/about">
                <FontAwesomeIcon icon ={faUser} color= "#4d4d4e"/> 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className ="project-link" to ="/projects">
                <FontAwesomeIcon icon ={faCode} color= "#4d4d4e"/> 
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className ="exp-link"to ="/workexperience">
                <FontAwesomeIcon icon ={faTimeline} color= "#4d4d4e"/> 
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;