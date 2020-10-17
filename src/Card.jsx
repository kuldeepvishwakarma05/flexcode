
import React from 'react';
import { NavLink } from 'react-router-dom';



const Card= (props)=> {

  return (
    <>

<div className="col-md-4 col-10 mx-auto">

<div className="card">
  <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title">{props.title} </h5>
  <p className="card-text">{props.text}</p>
  <div className="text-center">

  <NavLink to={props.link} className="btn btn-primary text-center" >
    <i className="fa fa-folder"> </i> Get this
     </NavLink>
  
  </div></div>
</div>

</div>







        </>
  );
}

export default Card;
