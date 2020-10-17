import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/home.png"
import './App.css';

function Home() {
  return (
    <>
         <section id="header" className="d-flex align-item-center mt-5">
             
<div className="container-fluid ">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

     <h1>
    Grow your skill with <strong>Kuldeep Vishwakarma </strong>
    </h1>
    
    <h2 className="my-3"> 
    We are the best for software development. 
    </h2>

<div className="mt-3">
<NavLink to="/service" className="btn-get-started button-fluid"> Let's Start</NavLink>
</div>
    </div>


<div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={web} className="img-fluid animated" alt="homeImage"/>
</div>
</div>
    </div>
    </div>
</div>


         </section>

         
        </>
  );
}

export default Home;
