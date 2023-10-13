import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="pricing section">
      <div className="text-center w-75 my-4 mx-auto">
        <h2 className="secTitle text-center">About US</h2>
       
      </div>
      <main>
        <div className="row row-cols-1 row-cols-md-6.5 mx-4">
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <p className="fs-5 text-muted text-center mx-4">
                Whether you're just starting out or already have some experience, we offer various Technology courses designed to fit your needs. Curated from top educational institutions and industry leaders, our selection of Technology courses aims to provide quality training for everyone—from individual learners seeking personal growth to corporate teams looking to upskill. For those pursuing professional advancement, skill acquisition, or even a new career path, these Technology courses can be a valuable resource. Take the next step in your professional journey and enroll in a Technology course today!
                </p>
                <button className="btn btn-lg ">Join Us</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
