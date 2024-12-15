import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../App'; // Import AuthContext to manage login state.
import Fireworks from '@fireworks-js/react';

export default function Login() {
  const { login } = useContext(AuthContext); // Access the login function from context.
  const navigate = useNavigate(); // To navigate after login.

  // Notification function
  const notify = (msg, type) => {
    toast[type](msg);
  };

  
  const [show,setShow] = useState(false)

  // Validation schema for form fields
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios
  .post(`${baseUrl}/auth/signin`, values)
  .then((response) => {
    console.log("Login API response:", response.data); // Debug log
    const { user, token } = response.data; // Extract 'user' and 'token'
    const username = user.name; // Extract the 'name' from 'user'

    if (response.status === 200) {
      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username); // Save username to localStorage
      notify('Login Successful', 'success');
      login(username); // Pass the correct username to context
      navigate('/home');
    }
  })
  .catch((error) => {
    console.error("Login API error:", error);
    if (error.response?.status === 409) {
      notify(error.response.data.message, 'error');
    } else {
      notify('An error occurred. Please try again.', 'error');
    }
  });

    },
  });

  return (
    <div>
      <div className="w-50 m-auto my-5">
        <h2>Login Now</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            id="email"
            name="email"
            className="form-control my-3"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}

          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="password"
            name="password"
            className="form-control my-3"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}

          {/* Submit Button */}
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn bg-black text-bg-danger"
            onClick={()=>setShow(!show)}
          >
            Login
          </button>
          {
            show?
            <Fireworks autorun={{speed:1}}/>
            :''
          }
        </form>
      </div>
    </div>
  );
}
