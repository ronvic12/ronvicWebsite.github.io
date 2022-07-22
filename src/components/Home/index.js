import Profile from '../../assets/images/ronvic.png';
import './index.scss';
import Resume from '../../assets/resume/software engineer resume 2022 (Early Career) - Google Docs.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
const Home = () =>{

    return (
        <div className="container home-page">
            
            <div className="text-zone">
            <h1>Hi, I'm Ronvic Cuevas</h1> 
            <img src={Profile} alt ="profile"></img>
            <h1>Software Developer</h1>
            <h2>Computer Science at UC Davis</h2>
            <a href={Resume} className ="resume-button">Download Resume</a>
            </div>
            <div className ="icons">
                <ul>
                    <a
                    target="_blank"
                    rel ="noreferrer"
                    href = "https://www.linkedin.com/in/ronvic-cuevas/"
                    ></a>
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
                    <FontAwesomeIcon icon = {faInstagram} color="#4d4d4e"/>
                    <FontAwesomeIcon icon = {faTwitter} color="#4d4d4e"/>
                </ul>
            </div>
        </div>
    );
}

export default Home