import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './WhatsAppForm.css';
const WhatsAppForm = ({ onClose }) => {
  const initialValues = { name: '', message: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('!Required'),
    message: Yup.string().required('!Required')
  });
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:3001/api/send-message', values);
      alert('Message sent successfully');
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }
    onClose();
  };
  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field name="phoneNumber" type="text" />
              <ErrorMessage name="message" component="div" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field name="message" as="textarea" />
              <ErrorMessage name="message" component="div" />
            </div>
            <div><button type="submit" >Submit</button></div>
            <div><button type="button" onClick={onClose}>Close</button></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default WhatsAppForm;
