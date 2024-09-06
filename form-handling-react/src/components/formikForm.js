import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  return React.createElement(
    Formik,
    {
      initialValues: { username: '', email: '', password: '' },
      validationSchema: RegistrationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      }
    },
    ({ isSubmitting }) => React.createElement(
      Form,
      null,
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Username:'),
        React.createElement(Field, { type: 'text', name: 'username' }),
        React.createElement(ErrorMessage, { name: 'username', component: 'p' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Email:'),
        React.createElement(Field, { type: 'email', name: 'email' }),
        React.createElement(ErrorMessage, { name: 'email', component: 'p' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Password:'),
        React.createElement(Field, { type: 'password', name: 'password' }),
        React.createElement(ErrorMessage, { name: 'password', component: 'p' })
      ),
      React.createElement(
        'button',
        { type: 'submit', disabled: isSubmitting },
        'Register'
      )
    )
  );
}

export default FormikForm;
