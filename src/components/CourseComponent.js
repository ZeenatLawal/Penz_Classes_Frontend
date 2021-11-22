/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";

const CourseComponent = ({ course }) => {
  const dispatch = useDispatch();
  return (
    // <div key={course.id}>
      // <Carousel variant="dark" key={course.id}>
        // <Carousel.Item className="d-flex w-100">
  
      /* <div className="d-flex flex-column p-2">
        <img className="d-block" src={course.image} alt="First slide" />
        <hr className="w-50 mx-auto" />
        <h5 className="text-center">{course.title}</h5>
        <p className="w-100 text-break">{course.description}</p>
        <div className="d-flex justify-content-evenly">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div><Carousel.Caption></Carousel.Caption><div className="d-flex flex-column p-2">
        <img className="d-block" src={course.image} alt="First slide" />
        <hr className="w-50 mx-auto" />
        <h5 className="text-center">{course.title}</h5>
        <p className="w-100 text-break">{course.description}</p>
        <div className="d-flex justify-content-evenly">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div><Carousel.Caption></Carousel.Caption> */
          <>
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
      </div><Carousel.Caption></Carousel.Caption></>
        // </Carousel.Item>
        /* <Carousel.Item className="d-flex w-100">
          <div className="d-flex flex-column p-2">
            <img className="d-block" src={course.image} alt="First slide" />
            <hr className="w-50 mx-auto" />
            <h5 className="text-center">{course.title}</h5>
            <p className="w-100 text-break">{course.description}</p>
          </div>
          
          <Carousel.Caption></Carousel.Caption>
          <div className="d-flex flex-column p-2">
            <img className="d-block" src={course.image} alt="First slide" />
            <hr className="w-50 mx-auto" />
            <h5 className="text-center">{course.title}</h5>
            <p className="w-100 text-break">{course.description}</p>
          </div>
          <Carousel.Caption></Carousel.Caption>
          <div className="d-flex flex-column p-2">
            <img className="d-block" src={course.image} alt="First slide" />
            <hr className="w-50 mx-auto" />
            <h5 className="text-center">{course.title}</h5>
            <p className="w-100 text-break">{course.description}</p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item> */
      // </Carousel>
    // </div>
  );
};
CourseComponent.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    instructor: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default CourseComponent;
