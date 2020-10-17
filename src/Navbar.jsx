import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './img/rocket2.png'

const Navbar =()=>{

return(

 <>
<div className="container-fluid ">
    <div className="row">
<div className="col-10 mx-auto">

<nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light ">
  <NavLink id="brand" className="navbar-brand" to="/">
  <img src={logo} className="img-fluid logo" alt="logoImage"/>
    Flex Code</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

     
    <li className="nav-item">
        <NavLink activeClassName='' className="nav-link" to="/">Home</NavLink>
      </li>    
     
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/service">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
      </li>

      
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
   
  </div>
</nav>

</div>
    </div>


</div>

</>


);


};

export default Navbar;