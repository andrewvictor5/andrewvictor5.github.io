import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import HawaiiPage from './pages/HawaiiPage';
import WaterfallPage from './pages/WaterfallPage';
import YellowstonePage from './pages/YellowstonePage';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Andrew Victor',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Projects', path: '/projects' }, 
        { title: 'Resume', path: '/resume' },
        { title: 'Hawaii', path: '/hawaii'},
        { title: 'Waterfall', path: '/waterfall'},
        { title: 'Yellowstone', path: '/yellowtsone'}
      ],
      home: {
        title: 'Andrew Victor\'s Portfolio',
        subTitle: '"An investment in knowledge pays the best interest." - Benjamin Franklin',
        text: 'Check out some photos of my recent trips below!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Andrew'
      },
      projects: {
        title: 'Andrew\'s Projects'
      },
      resume: {
        title: 'Updated 12/10/2020'
      },
      hawaii: {
        title: 'Kailua Kona Beach'
      },
      waterfall: {
        title: 'Clackamas Waterfalls Hike'
      },
      yellowstone: {
        title: 'Yellowstone National Park'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>AV</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}  />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title}  />} />
          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} subTitle={this.state.resume.subTitle} />} />
          <Route path="/hawaii" render={() => <HawaiiPage title={this.state.hawaii.title}  />} />
          <Route path="/waterfall" render={() => <WaterfallPage title={this.state.waterfall.title}  />} />
          <Route path="/yellowstone" render={() => <YellowstonePage title={this.state.yellowstone.title}  />} />
          <Footer>

          </Footer>

        </Container>
      </Router>
    );
  }
}

export default App;
