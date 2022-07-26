import Profile from '../../assets/images/ronvic.png';
import './index.scss';
import Resume from '../../assets/resume/software engineer resume 2022 (Early Career) - Google Docs.pdf';

const Home = () =>{

    return (
        <div className="container home-page">
            
            <div className="text-zone">
            <h1>Hi, I'm Ronvic Cuevas</h1> 
            <img id= "myprofile" src={Profile} alt ="profile"></img>
            <h1>Software Developer</h1>
            <h2>Computer Science at UC Davis</h2>
            <a href={Resume} className ="resume-button">Download Resume</a>
            </div>
        </div>
    );
}

export default Home