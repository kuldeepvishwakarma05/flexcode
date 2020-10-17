import React from 'react';
import exp from './img/exp.jpg'
import './App.css';
import { NavLink} from 'react-router-dom';

function About() {
  return (
    <>

<section id="header" className="d-flex align-item-center mt-5">
             
             <div className="container-fluid ">
             <div className="row">
             <div className="col-10 mx-auto">
             <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
             
                  <h1>
                 Learn more about in development <br></br><strong> Join Us</strong>
                 </h1>
                 
                 <div className="icons-container my-3">

<div className="social-icons spinned">

  <a target="_/black" className="item facebook" href="https://www.facebook.com/Deepsitetool-102147431356410"><em className="fa fa-facebook"></em></a>
  
  <a target="_/black"  className="item youtube" href="https://youtube.com/channel/UCp-L7jPsWcUlCAmQN237mJw"><em className="fa fa-youtube"></em></a>
  <a target="/black" className="item github" href="https://github.com/kuldeepvishwakarma05"><em className="fa fa-github"></em></a>


    </div>

</div>
             <div className="mt-3">
             <NavLink to="/service" className="btn-get-started button-fluid">Software</NavLink>
             </div>
                 </div>
             
             
             <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={exp} className="img-fluid exp" alt="homeImage"/>
             </div>
             </div>
                 </div>
                 </div>
             </div>
             
             
                      </section>
             
                      


        </>
  );
}
export default About;
