import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from '../../assets/images/logo1.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import KnightQuest from '../../assets/logo_images/kq.png'

// function Card(props){
//   return(
//     <div className="card">
//       <div className="card_body">
//         <img src ={props.img}/>
//         <h2 className="card_title">{props.title}</h2>
//         <p className="card_description">{props.description}</p>
//         <button className="card_btn">View on Github</button>
//       </div>
//     </div>
//   )
// }


function Projects(){
  return (
    <div className="wrapper">

    <CardGroup>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
KnightQuest( 2D Platform Game)</Card.Title>
      <Card.Text>
      KnightQuest is a 2D platform gameplay with simple sword combat mechanics. The goal of the game is traverse various obstacles and enemies in order to save the royal family. Worked with 5 people, contributed by implementing User Interface, Map Level Design and Narrative Design.
      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/KnightQuest">View on Github</Card.Link>
      <Card.Link href="https://breliu-dv.github.io/KnightQuest/">Play on WebGL version</Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
OpportunityKnocks App</Card.Title>
      <Card.Text>
      A mobile cross-platform App created for student-athletes to provide compensation through their image and likeness. This app was built through flutter and dart with the support of the Firebase as the database.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
OneLoop</Card.Title>
      <Card.Text>
      Web Application created for OneLoop organization that was made by #includeDavis. Contributed by developing a UI design on settings page with another team member. Used HTML,CSS and JavaScript.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>MyExposure (HACKDAVIS, independent work)</Card.Title>
      <Card.Text>
      A website created with other two team members by using HTML, CSS, Javascript for FrontEnd and Python as a Backend language in order to know the exposure risk, in order to make smart decisions of either meeting with your social buddies or not.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
Aegis(3D test factory game) </Card.Title>
      <Card.Text>
      Aegis is a 3D demo mini-game that has different types of shield and projectiles that are instantiated. It demonstrates different types of projectile damage and shield damage. Contributed by implementing factory software design pattern.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
Pikmini( 3D mini-game) </Card.Title>
      <Card.Text>
      Pikmini is a 3D mini-game that uses the observe pattern design in order to command the pikmini from one place to another. Contributed by implementing Publisher/ Subscriber patterns and designing a lifespan of a pikmini.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>Connect4AI</Card.Title>
      <Card.Text>
      Building two types of AI agents: MinimaxAI agent and AlphabetaAI agent. The main goal is to learn the fundamentals of Minimax and Alphabeta for two player games.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
ClimbingMountSaintHelens</Card.Title>
      <Card.Text>
      Designed an Admissible Heuristic and Implementing A* algorithm for minimizing total path cost and amount time spent.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
dcash</Card.Title>
      <Card.Text>
      This web server is a simple server used in ECS 150 for teaching about multi-threaded programming and operating systems. This version of the server can only handle one client at a time and simply serves static files. Also, it will close each connection after reading the request and responding, but generally is still HTTP 1.1 compliant.
      </Card.Text>
      <Button variant="primary">View on Github</Button>
    </Card.Body>
  </Card>
  </CardGroup>
  </div>
  );
};

export default Projects;
// <CardGroup>
    //   <Card>
    //     <Card.Img id = "profimg" variant="top" src={KnightQuest} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{' '}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>