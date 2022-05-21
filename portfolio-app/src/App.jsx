import React from 'react'
import Header from './components/Header/header';
import Navbar from './components/Nav/navbar';
import About from './components/About/about';
import Skills from './components/Experience/experience';
import Projects from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';



const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App;














// import React, {Fragment} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './components/home';
// import About from './components/About/about';
// import Resume from './components/Projects/resume';
// import Projects from './components/Projects/projects';
// import Contact from './components/Contact/contact';
// import Error from './components/error';
// import Navbar from './components/Nav/navbar';
// import './App.css';

// function App() {  
//     return (
//       <Router>
//         <Fragment>
//       <Navbar />
//       <Route exact path="/" component={Home}/>

//       <Switch>
//  	      <Route exact path="/about" component={About}/>
//         <Route exact path="/resume" component={Resume}/>
//         <Route exact path="/projects" component={Projects}/>
//         <Route exact path="/contact" component={Contact}/>
//         <Route exact path="/error" component={Error}/>
//       </Switch>
//       </Fragment>
//       </Router>
//     )
    
//   };
//   export default App;