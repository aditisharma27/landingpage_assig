import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import "./popular.scss";
import img1 from "../../Assets/web development.jpg";
import img2 from "../../Assets/nodejs.jpg";
import img3 from "../../Assets/css.jpg";
import react from "../../Assets/reactjs.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    courseTitle: "UI development",
    About: "UI development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.",
    degree: "UI Development ",
  },
  {
    id: 2,
    imgSrc: img2,
    courseTitle: "Nodejs ",
    About: " Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. ",
    degree: "Nodejs ",
  },
  {
    id: 3,
    imgSrc: img3,
    courseTitle: "CSS ",
    About: "CSS is a computer language for laying out and structuring web pages (HTML or XML).  ",
    degree: "CSS 3",
  },
  {
    id: 4,
    imgSrc: react,
    courseTitle: "Modern ReactJS",
    About:"React is a  open-source front-end JavaScript library for building UIs on components.",
    degree: "ReactJS ",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Courses</h2>
            <p >Have a look to the popular and booming courses...
               <br></br>
              Take the next step in your professional journey and enroll in a
              Technology course today!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent d-xl-flex  ">
          {Data.map((data) => {
            return (
              <div className="singleCourse ">
                <div className="courseImg">
                  <img src={data.imgSrc}  alt="Image title"  />
                  <div className="overlayInfo">
                    <h6>{data.courseTitle}</h6>
                    <p>
                     {data.About}
                    </p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number" >{data.id}</div>
                  <div className="destText flex">
                    <h4>{data.degree}</h4>
                    <span className="flex">
                      <span className="dot">
                        <SiYourtraveldottv className="icon" />
                      </span>
                      TECH
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
