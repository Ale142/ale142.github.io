
import {Navbar,Nav,Container} from 'react-bootstrap';
import About from './component/About';
import Skill from './component/Skill';
import Link from './component/Link';
import MyTimeline from './component/Timeline';
import Particles from 'react-particles-js';
import { React, Component } from 'react';




class App extends Component {
  constructor(props) {
    super(props);
  }
 
  changeTheme() {
    var element = document.body;
    element.classList.toggle("light-theme");
  }

  
  render() {
    return (
      <Container>
     
      <Navbar collapseOnSelect expand = "lg" className = "nav-bar" sticky = "top">
          <Navbar.Brand style = {{fontSize: "25px", fontFamily: 'Montserrat', fontFamily: "sans-serif", fontFamily: "Roboto Mono", fontFamily:'monospace', color: "white"}}href="">Alessandro Bacci </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" style = {{marginLeft: "20%"}}>
              <Nav.Item>
              <Nav.Link style = {{fontSize: "20px", color: "white"}} onClick = {() => document.getElementById('about').scrollIntoView({behavior:'smooth', block:"end"})}>ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Link style = {{fontSize: "20px", color: "white"}} onClick = {() => document.getElementById('link').scrollIntoView({behavior:'smooth',block:"end"})}>LINK</Nav.Link>
              <Nav.Link style = {{fontSize: "20px", color: "white"}} onClick = {() => document.getElementById('skill').scrollIntoView({behavior:'smooth',block:"end"})}>SKILL</Nav.Link>
              <Nav.Link style = {{fontSize: "20px", color: "white"}} onClick = {() => document.getElementById('edu').scrollIntoView({behavior:'smooth',block:"end"})}>EDUCATION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <a onClick = {() => this.changeTheme()}> link </a> */}
        </Navbar>
        
        
        <div id = "about"><About/> </div>
        <div id ="skill"> <Skill/> </div>
        <div id = "link"><Link/> </div>
        <Particles > </Particles>
        <div id = "edu"><MyTimeline/></div>
        </Container>
        
    );
  }
}



export default App;
