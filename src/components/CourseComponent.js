/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const CourseComponent = ({ course }) => {
  const dispatch = useDispatch();
  return (
      // <div key={course.id}>
        <div className="d-flex justify-content">
          <div className="d-flex flex-column p-2">
            <img className="d-block" src={course.image} alt="First slide" />
            <hr className="w-50 mx-auto" />
            <h5 className="text-center">{course.title}</h5>
            <p className="w-100 text-break">{course.description}</p>
            <div className="d-flex justify-content-evenly">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
      </div>
    // </div>
  )
};

