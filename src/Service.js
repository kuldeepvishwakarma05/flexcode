import React from 'react';

import './App.css';
import Card from './Card';
import SData from './SData';

function Service() {
  return (
    <>
       <div className="my-5">
<h1 className='text-center'>Our Projects</h1>
       </div>

       <div className="container-fluid md-5">
    <div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">
{
  SData.map((val, ind)=>{
return<Card key="{ind}"
imgsrc={val.imgsrc}
title={val.title}
text={val.text}
link={val.link}

/>
  })
}

</div>




         </div>
         </div>
         </div>
        </>
  );
}

export default Service;
