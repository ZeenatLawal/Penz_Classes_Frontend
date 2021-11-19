import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addNewCourses } from '../redux/courses/Courses';

const Courseform = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [instructor, setInstructor] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onImageChange = (e) => setImage(e.target.files);
  const onInstructorChange = (e) => setInstructor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      title, description, image, instructor,
    };
    dispatch(addNewCourses(course));
    setTitle('');
    setDescription('');
    setImage('');
    setInstructor('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Add course</h2>
        <Form.Label>Add course title</Form.Label>
        <Form.Control onChange={onTitleChange} type="text" />
        <Form.Label>Add course description</Form.Label>
        <Form.Control onChange={onDescriptionChange} type="text" />
        <Form.Label>Add image</Form.Label>
        <Form.Control onChange={onImageChange} type="file" />
        <Form.Label>Add instructor name</Form.Label>
        <Form.Control onChange={onInstructorChange} type="text" />
        <Button type="submit">Add course</Button>
      </Form>
    </div>
  );
};

export default Courseform;
