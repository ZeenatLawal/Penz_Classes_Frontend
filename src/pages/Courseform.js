import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { addNewCourses } from '../redux/courses/Courses';

const Courseform = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [instructor, setInstructor] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onImageChange = (e) => setImage(e.target.files[0]);
  const onInstructorChange = (e) => setInstructor(e.target.value);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('instructor_name', instructor);
    formData.append('upload_preset', 'penz-classes');
    dispatch(addNewCourses(formData));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();
    }
    setValidated(true);
    setTitle('');
    setDescription('');
    setImage('');
    setInstructor('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <h2 className="text-center page-title mb-4 text-uppercase">Add course</h2>
        <div className="px-4 py-3 form-border text-white">
          <Form.Label>Add course title</Form.Label>
          <Form.Control onChange={onTitleChange} type="text" className="mb-3" required />
          <Form.Label>Add course description</Form.Label>
          <Form.Control onChange={onDescriptionChange} type="text" className="mb-3" required />
          <Form.Label>Add image</Form.Label>
          <Form.Control onChange={onImageChange} type="file" accept="image/*" className="mb-3" required />
          <Form.Label>Add instructor name</Form.Label>
          <Form.Control onChange={onInstructorChange} type="text" className="mb-3" required />
          <div className="text-right"><Button type="submit" onClick={() => handleRoutes('/courses')} className="button">Add course</Button></div>
        </div>
      </Form>
    </div>
  );
};

export default Courseform;
