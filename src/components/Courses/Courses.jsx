import React from "react";
import { Link } from "react-router-dom";
import coursesData from "../../Data/CoursesDtata";
import "./Courses.css";

function Courses() {
  return (
    <div className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses__container">
        {coursesData.map((course, i) => {
          if (i < 3) {
            return (
              <div key={i} className="course">
                <div className="course__image">
                  <img src={course.image} alt="course img" />
                </div>
                <div className="course__info">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                  <Link to="/courses" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Courses;
