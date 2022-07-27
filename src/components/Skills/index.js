import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Skills = () => {
  return (
  <div className="skills-page">
    <h1>SKILLS</h1>

    <h1>Programming Languages</h1>
    <div className="programming">
    <ul id = "types">
      <li>Python</li>
      <li>C/C++</li>
      <li>Dart</li>
    </ul>
    </div>
    <h1>Front-end Tools & FrameWorks (Mobile/Web Dev)</h1>
    <div className="programming">
    <ul id = "types">
      <li>HTML</li>
      <li>CSS</li>
      <li>TypeScript/JavaScript</li>
      <li>ReactJS</li>
      <li>Flutter</li>
      <li>Figma</li>
      <li>Swift/SwiftUI</li>
    </ul>
    </div>
    <h1>Backend tools & Databases (Mobile/Web Dev)</h1>
    <div className="programming">
    <ul id = "types">
      <li>MySQL</li>
      <li>Express.js</li>
      <li>Next.js</li>
      <li>Nest.js</li>
      <li>Node.js</li>
      <li>Firebase</li>
      <li>RethinkDB</li>
    </ul>
    </div>
    
    </div>
  );
};

export default Skills;