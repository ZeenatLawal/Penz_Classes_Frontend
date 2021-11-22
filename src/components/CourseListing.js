/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses } from "../redux/courses/Courses";
import CourseComponent from "./CourseComponent";
import { Carousel } from "react-bootstrap";

const CourseListing = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  // const state = courses.sort(() => 0.5 - Math.random());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <div className="container">
        {courses && courses.map((course) => (
          <Carousel variant="dark">
            <Carousel.Item className="d-flex w-100">
              <CourseComponent
                key={course.id}
                course={course}
              />
              <CourseComponent
                key={course.id}
                course={course}
              />
              <CourseComponent
                key={course.id}
                course={course}
              />
            </Carousel.Item>
          </Carousel>
          ))}
    </div>
  );
};

export default CourseListing;
