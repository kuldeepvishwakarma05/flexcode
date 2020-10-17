import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "./Navbar"
import './App.css';
import { Redirect, Route,  Switch } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import { Helmet } from 'react-helmet';
import Downlaod from './Download';
import PageNotFound from './PageNotFound';


const TITLE="Flex Code"

function App() {
  return (
    
<>

         <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
<Navbar/>   
      <Switch>
      
           <Route exact path="/"  component={Home}/>
           <Route exact path="/about"  component={About}/>
           <Route exact path="/service"  component={Service}/>
           <Route exact path="/contact"  component={Contact}/>
           <Route exact path="/downloads"  component={Downlaod}/>
           <Route exact path="/pagenotfound" component={PageNotFound} />
           <Redirect to="/pagenotfound" />
         </Switch>
         </>
      
  );
}

export default App;
