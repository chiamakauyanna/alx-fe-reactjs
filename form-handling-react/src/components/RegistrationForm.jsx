import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '', // Corrected from name to username
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    let isValid = true;

    // Check for empty fields
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${field} is required`;
        isValid = false;
      }
    });

    setErrors(validationErrors);

    if (isValid) {
      // Submit the form (e.g., send data to the server)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username" // Corrected from name to username
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegistrationForm;
