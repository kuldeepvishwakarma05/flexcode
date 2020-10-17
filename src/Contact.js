import React from 'react';

import './App.css';

function Contact() {
  return (
    <>
     
<div className="card col-4 container-fluid py-5">
  
<div className="cards">
  <form>
    <h2 className="text-center text-success"> Hey there please contact us !!</h2>
  <div className="form-group py-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1"> Enter your Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group py-4">
    <label for="exampleFormControlTextarea1">Enter your Message here</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-primary py-2">Submit</button>
  </div>
</form>

  </div>

</div>
         
        </>
  );
}

export default Contact;
