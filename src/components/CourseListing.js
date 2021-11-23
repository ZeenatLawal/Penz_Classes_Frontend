/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses } from "../redux/courses/Courses";
import { StyledComponent, CourseComponent } from "./CourseComponent";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const CourseListing = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <>  
        <Carousel breakPoints={breakPoints}>
          {courses && courses.map((course) => (
                <CourseComponent
                  key={course.id}
                  course={course}
                />
            ))}
        </Carousel>
    </>
  );
};

export default CourseListing;
