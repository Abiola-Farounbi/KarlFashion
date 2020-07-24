import React from 'react';
import './App.css';
import Home from './components/Home';
import Women from './components/womenCollection';
import Accessories from './components/accessories.js';
import Men from './components/menCollection';
import Contact from './components/Contact';
import MenuBar from './components/navabar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';



function App() {

  return (
  <Router>
      <div className="App">
     <MenuBar></MenuBar>
     <Route render={({location}) => ( 
            <TransitionGroup>
            <CSSTransition key={location.key} timeout ={300} classNames='fade'>
             <Switch location={location}>
            
              <Route path='/' exact component={Home}></Route> 
              <Route path='/contact' component={Contact} /> 
              <Route path='/men' component={Men}/>
              <Route path='/accessories' component={Accessories}/>
              <Route path='/women' component={Women} /> 
              </Switch>
              </CSSTransition>
              </TransitionGroup>

     )} />
 

      <Footer></Footer>
    </div>
  </Router>
  );
}



export default App;
