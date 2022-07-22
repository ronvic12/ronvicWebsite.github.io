import Profile from '../../assets/images/ronvic.png';
import {Link} from 'react-router-dom';
import './index.scss';
import Resume from '../../assets/resume/software engineer resume 2022 (Early Career) - Google Docs.pdf';
const Home = () =>{

    return (
        <div className="container home-page">
            
            <div className="text-zone">
            <h1>Hi, I'm Ronvic Cuevas</h1> 
            <img src={Profile} alt ="profile"></img>
            <h1>Software Developer</h1>
            <h2>Computer Science at UC Davis</h2>
            <a href={Resume}>Download Resume</a>
      
            </div>
        </div>
    );
}

export default Home