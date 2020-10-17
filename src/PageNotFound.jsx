import React from 'react'
import page from './img/page.png';
const PageNotFound =()=>{


return (
    <>
    <div className="my-5 text-center text-danger" >
<h1 className='text-center'>Sorry Page Found</h1>
<img className="pagenotfound" src={page} alt="notfound" />
</div>

    <div className="container-fluid md-5">
 <div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">


</div>
</div>
</div>
</div>
    </>
);


}
export default PageNotFound; 