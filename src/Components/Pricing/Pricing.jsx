import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing section">
      <div className="text-center w-75 my-4 mx-auto">
        
          <h2 className="secTitle text-center ">Pricing</h2>
          <p className="fs-5 text-muted text-center"> Check Out the exciting prices for purchasing courses </p>
   
          </div>
       <main>
        <div className="row row-cols-1 row-cols-md-3  mx-2">
          <div className="col ">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Starter</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">$20
                <small className="text-muted fw-light">/mo
                </small></h1>
                <ul className="list-unstyled py-3">
                  <li>2 user included</li>
                  <li> 10 Gb of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg ">Buy now</button>

              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Intermediate</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">$20
                <small className="text-muted fw-light">/mo
                </small></h1>
                <ul className="list-unstyled py-3">
                  <li>10 users included</li>
                  <li> 15 Gb of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg ">Buy now</button>


              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Advanced</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">$20
                <small className="text-muted fw-light">/mo
                </small></h1>
                <ul className="list-unstyled py-3">
                  <li>20 users included</li>
                  <li> 25 Gb of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg ">Buy now</button>


              </div>
            </div>
          </div>
        </div>
       </main>
      
    </section>
  );
};

export default Pricing;
