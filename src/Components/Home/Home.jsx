import React from 'react'
import './home.scss'
const Home = () => {
  return (
    <section className='home'>
    <div className="secContainer container">
      <div className="homeText">
        <h1 className="title"> Plan Your course With TECH</h1>
        <p className="subTitle">
          Learn your desired programming language 
        </p>
        <button className='btn'>
          <a href=''>Explore</a>
        </button>
      </div>
    </div>
    </section>
  ) 
}

export default Home